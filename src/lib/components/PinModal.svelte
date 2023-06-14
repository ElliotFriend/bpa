<script>
    import { error } from '@sveltejs/kit'
    import { goto } from '$app/navigation'
    import { modalStore } from '$lib/stores/modalStore'
    import { walletStore, confirmCorrectPincode } from '$lib/stores/walletStore'
    import { webAuthStore } from '$lib/stores/webAuthStore'
    import { TransactionBuilder, Networks } from 'stellar-sdk'
    import { submit } from '$lib/utils/horizonQueries'
    import { submitChallengeTransaction } from '$lib/utils/sep10'

    const { close } = getContext('simple-modal')

    export let title = 'Transaction Preview'
    export let body = 'Please confirm the transaction below in order to sign and submit it to the network'
    export let firstPincode
    export let realTransaction = false
    export let challengeTransaction = false
    export let hasPincodeForm = false

    $: confirmPincode = null
    $: transaction = $modalStore.txXDR
        ? TransactionBuilder.fromXDR($modalStore.txXDR, $modalStore.challengeNetwork || Networks.TESTNET)
        : null

    import { page } from '$app/stores'
    import { getContext } from 'svelte'
    $: confirmingSubmitting = false
    // console.log('PinModal page', $page)

    // const confirmPincodesMatch = () => {
    //     console.log('returning', firstPincode === confirmPincode)
    //     return firstPincode === confirmPincode
    // }

    const confirm = async () => {
        confirmingSubmitting = true
        if (firstPincode) {
            try {
                confirmCorrectPincode(firstPincode, confirmPincode, true)
                $modalStore.confirmingPincode = false
                close()
            } catch (err) {
                $modalStore.errorMessage = err.body.message
            }
        } else if (challengeTransaction) {
            try {
                let signedTransaction = await walletStore.sign(transaction, confirmPincode.toString())
                let token = await submitChallengeTransaction(signedTransaction)
                webAuthStore.set({ token })
                $modalStore.confirmPincode = false
                close()
            } catch (err) {
                console.log('challenge transaction', err)
                $modalStore.errorMessage = err.body.message
            }

        } else if (transaction !== null) {
            try {
                let signedTransaction = await walletStore.sign(transaction, confirmPincode.toString())
                await submit(signedTransaction)
                $modalStore.confirmingPincode = false
                close()
            } catch (err) {
                console.log('transaction sign error', err)
                $modalStore.errorMessage = err.body.message
            }
        }
        confirmingSubmitting = false
    }

    const reject = () => {
        console.log('rejecting')
    }

</script>

<div class="prose">
    <h1>{title}</h1>
    {#if $modalStore.errorMessage}
        <div class="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error: {$modalStore.errorMessage}</span>
        </div>
    {/if}
    <p>{body}</p>
    {#if transaction !== null}
    <h2>Transaction Details</h2>
    <p>Network: <code>{transaction.networkPassphrase}</code></p>
    <p>Source: <code>{transaction.source}</code></p>
    {#if transaction.memo}
        <p>Memo: <code>{transaction.memo.value}</code></p>
    {/if}
    <h2>Operations</h2>
        <ol>
            {#each transaction.operations as operation, i}
                <li>Operation {i}</li>
                <ul>
                    {#each Object.entries(operation) as [ key, value ]}
                        <li>{key}: <code>{value}</code></li>
                    {/each}
                </ul>
            {/each}
        </ol>
    <pre><code>{$modalStore.txXDR}</code></pre>
    {/if}
    {#if hasPincodeForm}
        <div class="form-control">
            <label for="confirmPincode" class="label">
                <span class="label-text">Confirm Pincode</span>
            </label>
            <input
                type="number"
                id="confirmPincode"
                class="input input-bordered"
                bind:value={confirmPincode}
                on:keydown={e => e.key === 'Enter' && confirm()}
            />
        </div>
        <button class='btn btn-primary' on:click={confirm} disabled={confirmingSubmitting}>
            {#if confirmingSubmitting}<span class="loading loading-spinner loading-sm"></span>{/if}
            Confirm
        </button>
        <button class="btn btn-warning" on:click={reject} disabled={confirmingSubmitting}>Reject</button>
    {/if}
</div>



<!-- <style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }
</style> -->
