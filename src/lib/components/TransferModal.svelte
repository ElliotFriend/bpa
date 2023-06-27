<script>
    import { page } from '$app/stores'
    let publicKey = $page.data.publicKey
    let errorMessage = null

    import { Buffer } from 'buffer'

    import { webAuthStore } from '$lib/stores/webAuthStore'
    import { modalStore } from '$lib/stores/modalStore'
    import { kycStore } from '$lib/stores/kycStore'
    import ErrorAlert from '$lib/components/ErrorAlert.svelte'
    import StepsBar from '$lib/components/StepsBar.svelte'
    import TransferField from '$lib/components/TransferField.svelte'
    import { getSep6Info, initiateTransfer6, getTransferStatus6 } from '$lib/utils/sep6'
    import { getSep12Fields, putSep12Fields } from '$lib/utils/sep12'
    import { startTransaction } from '$lib/utils/horizonQueries'

    import PinModal from '$lib/components/PinModal.svelte'
    import LoadingSpinner from '$lib/components/LoadingSpinner.svelte'
    import { getContext } from 'svelte'
    import { Asset, Memo, Operation } from 'stellar-sdk'
    const { open, close } = getContext('simple-modal')

    let steps = ['Transfer Details', 'KYC Information', 'Submit Transfer', 'Confirmation']
    // let steps = ['KYC Information']
    let currentActive = 1
    let stepsBar
    $: activeStep = steps[currentActive - 1]

    let formData = {
        account: publicKey,
    }

    let sep12Fields = []
    let transferData = {
        endpoint: '',
        customer_id: '',
        transfer_id: '',
        transfer_submitted: false,
    }

    const handleStep = (stepIncrement) => {
        stepsBar.handleStep(stepIncrement)
    }

    const handleSubmit = () => {
        console.log('submitted form data', formData)
    }

    const startSep12Fields = async () => {
        // console.log('I just need to see my formData', formData)

        let json = await getSep12Fields($webAuthStore[homeDomain], homeDomain)
        // console.log('startSep12Fields json', json)

        if (json.fields) {
            for (let field in json.fields) {
                sep12Fields.push(field)
            }
        }
        return json
    }

    const submitTransfer = async () => {
        // we have an id, so initiate the real transfer, right?
        if (transferData.transfer_submitted) {
            let transaction = await getTransferStatus6(
                $webAuthStore[homeDomain],
                transferData.transfer_id,
                homeDomain
            )
            return transaction
        } else {
            let json = await initiateTransfer6(
                $webAuthStore[homeDomain],
                transferData.endpoint,
                formData,
                homeDomain
            )
            console.log('submitTransfer json', json)
            transferData.transfer_submitted = true
            if (json.id) {
                transferData.transfer_id = json.id
            }
            return json
        }
    }

    const submitPayment = async (withdrawDetails) => {
        let transaction = await startTransaction(publicKey)
        transaction = transaction
            .addMemo(Memo.hash(Buffer.from(withdrawDetails.memo, 'base64').toString('hex')))
            .addOperation(
                Operation.payment({
                    destination: withdrawDetails.account_id,
                    amount: formData.amount,
                    asset: new Asset(
                        formData.asset_code,
                        'GCDNJUBQSX7AJWLJACMJ7I4BC3Z47BQUTMHEICZLE6MU4KQBRYG5JY6B'
                    ),
                })
            )
            .setTimeout(300)
            .build()

        $modalStore.txXDR = transaction.toXDR()
        close()
        open(
            PinModal,
            {
                hasPincodeForm: true,
                realTransaction: true,
            },
            {},
            {
                onOpen: () => {
                    $modalStore.errorMessage = null
                },
                onOpened: () => {
                    $modalStore.confirmingPincode = true
                },
                onClose: () => {
                    if ($modalStore.errorMessage) {
                        errorMessage = null
                    } else if (!$modalStore.confirmingPincode) {
                        errorMessage = null
                    }
                },
                onClosed: () => {
                    $modalStore.txXDR = null
                },
            }
        )
    }

    const putCustomerFields = async () => {
        try {
            let submittedCustomerFields = sep12Fields.reduce((fields, item) => {
                if ($kycStore[item]) fields[item] = $kycStore[item]
                return fields
            }, {})
            let json = await putSep12Fields(
                $webAuthStore[homeDomain],
                submittedCustomerFields,
                homeDomain
            )
            console.log('i have put the jason', json)
            transferData.customer_id = json.id

            let { status } = await getSep12Fields($webAuthStore[homeDomain], homeDomain)
            console.log('putCustomerFields status', status)
            return status
        } catch (err) {
            $modalStore.errorMessage = err.error
        }
    }

    export let title = 'Initiate Transfer'
    export let body = 'Please follow the steps to create your transfer with your chosen anchor'
    export let homeDomain = 'testanchor.stellar.org'
</script>

<div class="prose dark:prose-invert">
    <h1>{title}</h1>
    {#if $modalStore.errorMessage}
        <ErrorAlert errorMessage={$modalStore.errorMessage} />
    {/if}
    <p>{body}</p>
    <StepsBar steps={steps} bind:currentActive={currentActive} bind:this={stepsBar} />
    <form on:submit|preventDefault={handleSubmit}>
        {#if activeStep === 'Transfer Details'}
            <p>Let's begin by deciding what kind of transfer we want to make.</p>
            {#await getSep6Info(homeDomain)}
                <LoadingSpinner />
            {:then info}
                <div class="form-control w-full">
                    <label class="label" for="endpoint-select">
                        <span class="label-text">What kind of transfer would you like to make?</span
                        >
                    </label>
                    <select
                        class="select-bordered select"
                        id="endpoint-select"
                        name="endpoint-select"
                        bind:value={transferData.endpoint}
                    >
                        <option value="" disabled selected>Select one</option>
                        {#each Object.entries(info) as [endpoint, details]}
                            {#if endpoint === 'deposit' || endpoint === 'withdraw'}
                                <option value={endpoint}>{endpoint}</option>
                            {/if}
                        {/each}
                    </select>
                    <label class="label" for="endpoint-select">
                        <span class="label-text-alt"
                            >Only transfer types supported by this anchor are listed.</span
                        >
                    </label>
                </div>
                {#if transferData.endpoint}
                    <div class="form-control w-full">
                        <label class="label" for="asset-select">
                            <span class="label-text">Please choose an asset</span>
                        </label>
                        <select
                            class="select-bordered select"
                            id="asset-select"
                            name="asset-select"
                            bind:value={formData.asset_code}
                        >
                            <option value="" disabled selected>Select one</option>
                            {#each Object.entries(info[transferData.endpoint]) as [asset, details]}
                                <option value={asset}>{asset}</option>
                            {/each}
                        </select>
                        <label class="label" for="asset-select">
                            <span class="label-text-alt"
                                >Only transferrable assets supported by this anchor are listed.</span
                            >
                        </label>
                    </div>
                {/if}
                {#if formData.asset_code}
                    <h4>Transfer Fields</h4>
                    <p>The anchor has requested the following information about your transfer</p>
                    {#each Object.entries(info) as [endpoint, details]}
                        {#if transferData.endpoint === 'deposit' && endpoint === 'deposit'}
                            {#each Object.entries(details[formData.asset_code].fields) as [field, fieldInfo]}
                                <TransferField
                                    field={field}
                                    fieldInfo={fieldInfo}
                                    bind:value={formData[field]}
                                />
                            {/each}
                        {:else if transferData.endpoint === 'withdraw' && endpoint === 'withdraw'}
                            <div class="form-control w-full max-w-xs">
                                <label class="label" for="transfer-type">
                                    <span class="label-text">Transfer Type</span>
                                </label>
                                <select
                                    name="transfer-type"
                                    id="transfer-type"
                                    class="select-bordered select"
                                    bind:value={formData.type}
                                >
                                    <option value="" disabled selected>Select one</option>
                                    {#each Object.keys(details[formData.asset_code].types) as transferType}
                                        <option>{transferType}</option>
                                    {/each}
                                </select>
                            </div>
                            {#if formData.type}
                                {#each Object.entries(details[formData.asset_code].types[formData.type].fields) as [field, fieldInfo]}
                                    <TransferField
                                        field={field}
                                        fieldInfo={fieldInfo}
                                        bind:value={formData[field]}
                                    />
                                {/each}
                            {/if}
                        {/if}
                    {/each}
                    <div class="form-control w-full">
                        <label class="label" for="amount">
                            <span class="label-text">Amount</span>
                        </label>
                        <input
                            bind:value={formData.amount}
                            class="input-bordered input"
                            type="text"
                            name="amount"
                            id="amount"
                            required
                        />
                    </div>
                {/if}
            {/await}
        {:else if activeStep === 'KYC Information'}
            <p>
                Next, we've checked with the anchor to see what KYC information is needed from you
                to make the deposit successful.
            </p>
            {#await startSep12Fields()}
                <p>loading...</p>
            {:then json}
                {#if json.provided_fields}
                    <details class="collapse bg-base-200">
                        <summary class="collapse-title text-xl font-medium"
                            >Previously provided information</summary
                        >
                        <div class="collapse-content">
                            <p>
                                Here are the KYC fields that have previously been submitted to this
                                anchor
                            </p>
                            {#each Object.entries(json.provided_fields) as [field, details]}
                                <div class="form-control w-full">
                                    <label class="label" for={field}>
                                        <span class="label-text">{details.description}</span>
                                        {#if details.optional}
                                            <span class="label-text-alt">Optional</span>
                                        {/if}
                                    </label>
                                    {#if details.type === 'binary'}
                                        <input
                                            type="file"
                                            class="file-input-bordered file-input w-full"
                                            disabled
                                        />
                                    {:else}
                                        <input
                                            bind:value={$kycStore[field]}
                                            class="input-bordered input"
                                            type="text"
                                            name={field}
                                            id={field}
                                            required={!details.optional}
                                            disabled
                                        />
                                    {/if}
                                </div>
                            {/each}
                        </div>
                    </details>
                {/if}
                {#each Object.entries(json.fields) as [field, details]}
                    <div class="form-control w-full">
                        <label class="label" for={field}>
                            <span class="label-text">{details.description}</span>
                            {#if details.optional}
                                <span class="label-text-alt">Optional</span>
                            {/if}
                        </label>
                        {#if details.type === 'binary'}
                            <input type="file" class="file-input-bordered file-input w-full" />
                        {:else}
                            <input
                                bind:value={$kycStore[field]}
                                class="input-bordered input"
                                type="text"
                                name={field}
                                id={field}
                                required={!details.optional}
                            />
                        {/if}
                    </div>
                {/each}
            {/await}
        {:else if activeStep === 'Submit Transfer'}
            <p>
                We have now submitted your KYC details to the anchor, and are waiting for their
                server to let us know a status.
            </p>
            {#await putCustomerFields()}
                <p>loading...</p>
            {:then status}
                {#if status === 'ACCEPTED'}
                    <p>
                        Your KYC information has been <strong><code>{status}</code></strong> by the anchor.
                        Please proceed with the rest of the transfer.
                    </p>
                {:else}
                    <p>
                        Your current KYC status with the anchor is <strong
                            ><code>{status}</code></strong
                        >. Please wait a moment and try again.
                    </p>
                    <button
                        class="btn-primary btn"
                        on:click={getSep12Fields($webAuthStore[homeDomain])}>Refresh status</button
                    >
                {/if}
            {/await}
        {:else if activeStep === 'Confirmation'}
            <p>
                <em>You may not be finished yet.</em> We have submitted your transfer to the anchor,
                and any further details and/or instructions are listed below. You may need to initiate
                a transfer to/from your bank.
            </p>
            {#await submitTransfer()}
                <p>loading...</p>
            {:then json}
                <div class="overflow-x-auto">
                    <table class="table">
                        <tbody>
                            {#each Object.keys(json) as key}
                                <tr>
                                    <th>{key}</th>
                                    <td>{key === 'extra_info' ? json[key].message : json[key]}</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
                {#if transferData.endpoint === 'withdraw'}
                    <button class="btn-primary btn" on:click={() => submitPayment(json)}
                        >Send Stellar Payment</button
                    >
                {/if}
            {/await}
        {/if}
    </form>

    <button class="btn" on:click={() => handleStep(-1)} disabled={currentActive === 1}>Prev</button>
    <button class="btn" on:click={() => handleStep(1)} disabled={currentActive === steps.length}
        >Next</button
    >
</div>
