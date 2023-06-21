<script>
    import { page } from "$app/stores"
    let publicKey = $page.data.publicKey

    import { webAuthStore } from '$lib/stores/webAuthStore'
    import { modalStore } from '$lib/stores/modalStore'
    import { kycStore } from '$lib/stores/kycStore'
    import ErrorAlert from '$lib/components/ErrorAlert.svelte'
    import StepsBar from "$lib/components/StepsBar.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import { getSep6Info, initiateTransfer6 } from '$lib/utils/sep6'
    import { getSep12Fields, putSep12Fields } from '$lib/utils/sep12'

    let steps = ['Step1', 'Step2', 'Step3', 'Step4']
    let currentActive = 1
    let stepsBar
    $: activeStep = steps[currentActive - 1]

    let formData = {
        asset_code: '',
        next_endpoint: '',
        id: '',
        amount: '',
        type: '',
    }

    let sep12Fields = []

    const handleStep = (stepIncrement) => {
        stepsBar.handleStep(stepIncrement)
    }

    const handleSubmit = () => {
        console.log('submitted form data', formData, sep12Fields)
    }

    const startSep12Fields = async () => {
        if (formData.id) {
            // we have an id, so initiate the real transfer, right?
            let json = await initiateTransfer6($webAuthStore[homeDomain], formData.asset_code, publicKey, formData.next_endpoint, homeDomain, formData.type, formData.amount)
            console.log('formData.id exists json', json)
        } else {
            let json = await initiateTransfer6($webAuthStore[homeDomain], formData.asset_code, publicKey, formData.next_endpoint, homeDomain, formData.type, formData.amount)
            if (json.type === 'non_interactive_customer_info_needed') {
                // get the fields from the kyc server
                json = await getSep12Fields($webAuthStore[homeDomain])
            }

            for (let field in json.fields) {
                sep12Fields.push(field)
            }
            return json.fields
        }
    }

    const putCustomerFields = async () => {
        let something = sep12Fields.reduce((acc, item) => {
            if ($kycStore[item])
                acc[item] = $kycStore[item]
            return acc
        }, {})
        // console.log('here is something', something)
        let { id } = await putSep12Fields($webAuthStore[homeDomain], something, homeDomain)
        // console.log('i have put the jason', json)
        formData.id = id
    }

    export let title = 'Initiate Transfer'
    export let body = 'Please follow the steps to create your transfer with your chosen anchor'
    export let homeDomain = 'testanchor.stellar.org'
</script>

<div class="prose">
    <h1>{title}</h1>
    {#if $modalStore.errorMessage}
        <ErrorAlert errorMessage={$modalStore.errorMessage} />
    {/if}
    <p>{body}</p>
    <StepsBar steps={steps} bind:currentActive bind:this={stepsBar}/>
    <form on:submit|preventDefault={handleSubmit}>
        {#if activeStep === 'Step1'}
            <p>Let's begin by deciding what kind of transfer we want to make.</p>
            {#await getSep6Info(homeDomain)}
                <p>loading...</p>
            {:then info}
                <div class="form-control w-full">
                    <label class="label" for="endpoint-select">
                        <span class="label-text">What kind of transfer would you like to make?</span>
                    </label>
                    <select class="select select-bordered" id="endpoint-select" name="endpoint-select" bind:value={formData}>
                        <option value="" disabled selected>Select one</option>
                        {#each Object.entries(info) as [endpoint, details] }
                            {#if endpoint === 'deposit' || endpoint === 'withdraw'}
                                <!-- TODO: We probably want to be able to support multiple currencies in case you could `deposit` USDC, and SRT, and... -->
                                {@const assetCode = Object.keys(details)[0]}
                                <option value={{next_endpoint: endpoint, asset_code: assetCode}}>{endpoint} {assetCode}</option>
                            {/if}
                        {/each}
                    </select>
                    <label class="label" for="endpoint-select">
                        <span class="label-text-alt">Only transfer types and assets supported by this anchor are listed.</span>
                    </label>
                </div>
                {#each Object.entries(info) as [endpoint, details], i}
                {#if formData.asset_code && endpoint === 'deposit'}
                    <div class="form-control w-full">
                        <label class="label" for="transfer-to-from">
                            <input type="radio" class="radio" name="transfer-to-from" value={details[formData.asset_code].fields.type.choices[i]} bind:group={formData.type} />
                            {details[formData.asset_code].fields.type.choices[i]}
                        </label>
                    </div>
                {/if}
                {/each}
                <div class="form-control w-full">
                    <label class="label" for="amount">
                        <span class="label-text">Amount</span>
                    </label>
                    <input bind:value={formData.amount} type="text" name="amount" id="amount" required />
                </div>
            {/await}
        {:else if activeStep === 'Step2'}
            <p>Next, we've checked with the anchor to see what KYC information is needed from you to make the deposit successful.</p>
            {#await startSep12Fields()}
                <p>loading...</p>
            {:then fields }
                {#each Object.entries(fields) as [field, details]}
                    <div class="form-control w-full">
                        <label class="label" for={field}>
                            <span class="label-text">{details.description}</span>
                        </label>
                        <input bind:value={$kycStore[field]} type="text" name={field} id={field} required={!details.optional}/>
                    </div>
                {/each}
            {/await}
        {:else if activeStep === 'Step3'}
            <p>We have now submitted your KYC details to the anchor, and are waiting for their server to let us know a status.</p>
            {#await putCustomerFields()}
                <p>loading...</p>
            {:then json}
                <pre><code>{JSON.stringify(json, null, 2)}</code></pre>
            {/await}
        {:else if activeStep === 'Step4'}
            <p>Now, we can actually request the transfer, right?</p>
            {#await startSep12Fields()}
                <p>loading...</p>
            {:then json}
                <pre><code>{JSON.stringify(json, null, 2)}</code></pre>
            {/await}
            <h3>Thank you for submitting your data</h3>
            <button class="btn btn-primary" type="submit">Submit</button>
        {/if}
    </form>

    <button class="btn" on:click={() => handleStep(-1)} disabled={currentActive === 1}>Prev</button>
    <button class="btn" on:click={() => handleStep(1)} disabled={currentActive === steps.length}>Next</button>
</div>
