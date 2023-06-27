<script>
    import { contacts } from '$lib/stores/contactsStore'
    import { fetchAccount, getAccountBalances } from '$lib/utils/horizonQueries'
    import PinModal from '$lib/components/PinModal.svelte'
    import { getContext } from 'svelte'
    const { open } = getContext('simple-modal')
    import { modalStore } from '$lib/stores/modalStore'
    import { startTransaction, findStrictSendPaths, findStrictReceivePaths } from '$lib/utils/horizonQueries'
    import { Operation, Asset, Memo } from 'stellar-sdk'
    import ErrorAlert from '$lib/components/ErrorAlert.svelte'
    import WarningAlert from '$lib/components/WarningAlert.svelte'

    /** @type {import('./$types').PageData} */
    export let data

    let checkDestinationFunded = (publicKey) => {
        fetchAccount(publicKey).then((res) => (createAccount = !res.funded))
    }

    let checkDestination = (publicKey) => {
        createAccount = false
        otherDestination = false
        if (publicKey === 'other') {
            otherDestination = true
            destinationPublicKey = otherPublicKey
        } else {
            checkDestinationFunded(publicKey)
        }
    }

    let findPaths = async () => {
        if (strictReceive) {
            let paths = await findStrictReceivePaths(data.publicKey, receiveAsset, receiveAmount)
        } else {
            let asset = sendAsset === 'native' ? new Asset.native() : new Asset(sendAsset.split(':')[0], sendAsset.split(':')[1])
            let paths = await findStrictSendPaths(asset, sendAmount, otherPublicKey || destinationPublicKey)
            console.log('findPaths paths', paths)
        }
    }

    let destinationPublicKey = ''
    let otherPublicKey = ''
    let otherDestination = false
    let createAccount = null
    let sendAmount = null
    let sendAsset = 'native'
    let receiveAmount = null
    let receiveAsset = 'native'
    let memoText = ''
    let errorMessage = ''
    let pathPayment = false
    let strictReceive = false

    const previewTransaction = async () => {
        let asset = sendAsset === 'native'
            ? new Asset.native()
            : new Asset(sendAsset.split(':')[0], sendAsset.split(':')[1])

        let transaction = await startTransaction(data.publicKey)
        if (memoText) {
            transaction.addMemo(Memo.text(memoText))
        }

        if (createAccount) {
            transaction.addOperation(
                Operation.createAccount({
                    destination: destinationPublicKey,
                    startingBalance: sendAmount.toString(),
                })
            )
        } else if (pathPayment) {
            // do the pathpayment stuff here!
        } else {
            transaction.addOperation(
                Operation.payment({
                    destination: destinationPublicKey,
                    amount: sendAmount.toString(),
                    asset: asset,
                })
            )
        }
        transaction = transaction.setTimeout(300).build()
        $modalStore.txXDR = transaction.toXDR()
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
                        errorMessage = $modalStore.errorMessage
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
</script>

<div class="prose dark:prose-invert mx-20 my-10 max-w-full">
    <h1>Send a Payment</h1>
    <p>Please complete the fields below to send a payment on the Stellar network.</p>

    {#if errorMessage}
        <ErrorAlert errorMessage={errorMessage} />
    {/if}

    <form on:submit|preventDefault={previewTransaction}>
        <div class="form-control">
            <label for="destination" class="label">
                <span class="label-text">Destination</span>
            </label>
            <select
                id="destination"
                name="destination"
                class="select-bordered select"
                bind:value={destinationPublicKey}
                on:change={checkDestination(destinationPublicKey)}
            >
                <option value="" disabled selected>Select Recipient</option>
                {#each $contacts as contact (contact.id)}
                    <option value={contact.address}>{contact.name}</option>
                {/each}
                <option value="other">Other...</option>
            </select>
        </div>
        {#if otherDestination}
            <div class="form-control">
                <label for="otherDestination" class="label">
                    <span class="label-text">Destination Public Key</span>
                </label>
                <input
                    id="otherDestination"
                    name="otherDestination"
                    type="text"
                    placeholder="G..."
                    class="input-bordered input w-full max-w-xs"
                    bind:value={otherPublicKey}
                    on:change={checkDestinationFunded(otherPublicKey)}
                />
            </div>
        {/if}
        {#if createAccount}
            <WarningAlert
                warningMessage="Account Not Funded: You are sending a payment to an account that does not yet
            exist on the Stellar ledger. Your payment will take the form of a
            <code>creatAccount</code> operation, and the amount you send must be at least 1XLM."
            />
        {/if}
        {#if createAccount !== null && !createAccount}
        <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">Send and Receive different assets?</span>
                <input type="checkbox" class="toggle" bind:checked={pathPayment} />
            </label>
        </div>
        {/if}
        {#if pathPayment}
            <div class="flex w-full">
                <div class="grid flex-grow">
                    <h3>Sending</h3>
                    <div class="form-control w-full">
                        <label for="sendAmount" class="label">
                            <span class="label-text">Sending Amount and Asset {strictReceive ? '(estimated)' : ''}</span>
                        </label>
                        <div class="join">
                            <div class="grow">
                                <div>
                                    <input on:change={findPaths} disabled={strictReceive} id="sendAmount" name="sendAmount" class="w-full input input-bordered join-item" placeholder="0.01" type="text" bind:value={sendAmount} />
                                </div>
                            </div>
                            <select class="select select-bordered join-item" bind:value={sendAsset}>
                                <option value="" disabled>Select one</option>
                                <option value="native">XLM</option>
                                {#await getAccountBalances(data.publicKey) then balances}
                                    {#each balances as balance}
                                        {#if balance.asset_type !== 'native'}
                                            <option value={`${balance.asset_code}:${balance.asset_issuer}`}>{balance.asset_code}</option>
                                        {/if}
                                    {/each}
                                {/await}
                            </select>
                        </div>
                    </div>
                </div>
                <div class="divider divider-horizontal w-20 mx-5">
                    Strict {strictReceive ? 'Receive' : 'Send'}
                    <input type="checkbox" class="toggle" bind:checked={strictReceive} />
                </div>
                <div class="grid flex-grow">
                    <h3>Receiving</h3>
                    <div class="form-control w-full">
                        <label for="receiveAmount" class="label">
                            <span class="label-text">Receiving Amount and Asset {!strictReceive ? '(estimated)' : ''}</span>
                        </label>
                        <div class="join">
                            <div class="grow">
                                <div>
                                    <input disabled={!strictReceive} id="receiveAmount" name="receiveAmount" class="w-full input input-bordered join-item" placeholder="0.01" type="text" bind:value={receiveAmount} />
                                </div>
                            </div>
                            <select class="select select-bordered join-item" bind:value={receiveAsset}>
                                <option value="" disabled>Select one</option>
                                <option value="native">XLM</option>
                                {#if otherPublicKey || destinationPublicKey}
                                    {#await getAccountBalances(otherPublicKey || destinationPublicKey) then balances}
                                        {#each balances as balance}
                                            {#if balance.asset_type !== 'native'}
                                                <option value={`${balance.asset_code}:${balance.asset_issuer}`}>{balance.asset_code}</option>
                                            {/if}
                                        {/each}
                                    {/await}
                                {/if}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        {:else}
            <div class="form-control max-w-full">
                <label for="amount" class="label">
                    <span class="label-text">Amount</span>
                </label>
                <div class="join">
                    <div class="grow">
                        <div>
                            <input id="amount" name="amount" class="w-full input input-bordered join-item" placeholder="0.01" type="text" bind:value={sendAmount} />
                        </div>
                    </div>
                    <select class="select select-bordered join-item">
                        <option value="" disabled>Select one</option>
                        <option value="native">XLM</option>
                        {#await getAccountBalances(data.publicKey) then balances}
                            {#each balances as balance}
                                {#if balance.asset_type !== 'native'}
                                    <option value={`${balance.asset_code}:${balance.asset_issuer}`}>{balance.asset_code}</option>
                                {/if}
                            {/each}
                        {/await}
                    </select>
                </div>
            </div>
        {/if}
        <div class="form-control">
            <label for="memo" class="label">
                <span class="label-text">Text Memo</span>
                <span class="label-text-alt">Optional</span>
            </label>
            <input
                id="memo"
                name="memo"
                type="text"
                placeholder="Maximum 28 characters"
                class="input-bordered input"
                maxlength="28"
                bind:value={memoText}
            />
        </div>
        <div class="form-control">
            <button type="submit" class="btn-primary btn">Preview</button>
        </div>
    </form>
</div>
