<script>
    import { modalStore } from '$lib/stores/modalStore'
    import { walletStore, confirmCorrectPincode } from '$lib/stores/walletStore'
    import { webAuthStore } from '$lib/stores/webAuthStore'
    import { TransactionBuilder, Networks } from 'stellar-sdk'
    import { submit, fundWithFriendbot } from '$lib/utils/horizonQueries'
    import { submitChallengeTransaction } from '$lib/utils/sep10'
    import ErrorAlert from '$lib/components/ErrorAlert.svelte'

    const { close } = getContext('simple-modal')

    export let title = 'Transaction Preview'
    export let body =
        'Please confirm the transaction below in order to sign and submit it to the network'
    export let firstPincode = ''
    export let publicKey = ''
    export let realTransaction = false
    export let challengeTransaction = false
    export let challengeHomeDomain = ''
    export let hasPincodeForm = true

    let confirmPincode = null
    $: transaction = $modalStore.txXDR
        ? TransactionBuilder.fromXDR(
              $modalStore.txXDR,
              $modalStore.challengeNetwork || Networks.TESTNET
          )
        : null

    import { getContext } from 'svelte'
    let confirmingSubmitting = false

    const confirm = async () => {
        confirmingSubmitting = true
        try {
            if (firstPincode) {
                confirmCorrectPincode(firstPincode, confirmPincode, true)
                $modalStore.confirmingPincode = false
                await fundWithFriendbot(publicKey)
                close()
            } else if (challengeTransaction) {
                let signedTransaction = await walletStore.sign(
                    transaction,
                    confirmPincode.toString()
                )
                let token = await submitChallengeTransaction(
                    signedTransaction.toXDR(),
                    challengeHomeDomain
                )
                webAuthStore.setAuth(challengeHomeDomain, token)
                $modalStore.confirmPincode = false
                close()
            } else if (realTransaction && transaction !== null) {
                let signedTransaction = await walletStore.sign(
                    transaction,
                    confirmPincode.toString()
                )
                await submit(signedTransaction)
                $modalStore.confirmingPincode = false
                close()
            }
        } catch (err) {
            console.error('transaction confirmation error', err)
            $modalStore.errorMessage = `${err.body.message}. ${err.body.result_codes ? `extra result_codes: <code>${JSON.stringify(err.body.result_codes)}</code>` : ""}`
        }
        confirmingSubmitting = false
    }

    const reject = () => {
        console.error('pincode confirmation rejected for transaction', $modalStore.txXDR)
        $modalStore.errorMessage = 'pincode confirmation rejected'
        close()
    }
</script>

<div class="prose dark:prose-invert min-w-0">
    <h1>{title}</h1>
    {#if $modalStore.errorMessage}
        <ErrorAlert errorMessage={$modalStore.errorMessage} />
    {/if}
    <p>{body}</p>
    {#if transaction !== null}
        {console.log('PinModal transaction', transaction)}
        <h2>Transaction Details</h2>
        <p>Network: <code>{transaction.networkPassphrase}</code></p>
        <p>Source: <code>{transaction.source}</code></p>
        <p>Sequence Number: <code>{transaction.sequence}</code></p>
        {#if transaction.memo}
            <p>Memo ({transaction.memo.type}): <code>{
                transaction.memo.type === 'text'
                ? transaction.memo.value.toString('utf-8')
                : transaction.memo.type === 'hash'
                ? transaction.memo.value.toString('base64')
                : transaction.memo.value
            }</code></p>
        {/if}
        <h2>Operations</h2>
        <ol start="0">
            {#each transaction.operations as operation, i}
                <li>Operation {i}</li>
                <ul>
                    {#each Object.entries(operation) as [key, value]}
                        <li>{key}: <code>{value}</code></li>
                    {/each}
                </ul>
            {/each}
        </ol>
        <h2>Transaction XDR</h2>
        <p>Below, the entire (unsigned) transaction is displayed in XDR format. You can confirm the details of it by checking the "View XDR" page of the <a href="https://laboratory.stellar.org/#xdr-viewer?type=TransactionEnvelope&network=test" target="_blank" rel="noopener, noreferrer">Stellar Laboratory</a>.</p>
        <pre class="whitespace-normal break-words">{$modalStore.txXDR}</pre>
        <pre>Here is a <code>pre</code> element</pre>
    {/if}
    {#if hasPincodeForm}
        <div class="form-control">
            <label for="confirmPincode" class="label">
                <span class="label-text">Confirm Pincode</span>
            </label>
            <input
                type="password"
                id="confirmPincode"
                class="input-bordered input"
                bind:value={confirmPincode}
                on:keydown={(e) => e.key === 'Enter' && confirm()}
            />
        </div>
        <button class="btn-primary btn" on:click={confirm} disabled={confirmingSubmitting}>
            {#if confirmingSubmitting}<span class="loading loading-spinner loading-sm" />{/if}
            Confirm
        </button>
        <button class="btn-warning btn" on:click={reject} disabled={confirmingSubmitting}
            >Reject</button
        >
    {/if}
</div>
