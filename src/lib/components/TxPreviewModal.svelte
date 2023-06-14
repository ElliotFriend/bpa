<!-- <script>
    import { modalStore } from '$lib/stores/modalStore'
    console.log('Hi, there! Greetings from TXPreviewModal.svelte')
</script>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">{$modalStore.title}</h3>
        <p class="py-4">{$modalStore.body}</p>
        <p><code>{$modalStore.txXDR}</code></p>
        <div class="modal-action">
            <label for="my-modal" class="btn">{$modalStore.button}</label>
        </div>
    </div>
</div> -->

<script>
    import { TransactionBuilder, Networks } from 'stellar-sdk'
    // import { txXDR } from '$lib/stores/txPreviewStore'
    // export let message = 'Hi'
    import { modalStore } from '$lib/stores/modalStore'
    // export let data
    // export let txXDR
    // $: txXDR = txXDR
    // export let source
    let transaction
    if ($modalStore.txXDR) {
        transaction = TransactionBuilder.fromXDR($modalStore.txXDR, Networks.TESTNET)
        console.log('transaction', transaction)
    }

    const handleConfirm = () => {
        // do something when confirm button is clicked
    }

    const handleReject = () => {
        // do something when reject button is clicked
    }
</script>

{#if transaction}
<div class="prose">
    <h1>{$modalStore.title}</h1>
    <p>{$modalStore.body}</p>
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
    <button on:click={handleConfirm} class="btn btn-success">Confirm</button>
    <button on:click={handleReject} class="btn btn-error">Reject</button>
</div>
{/if}

<!-- <p><code>{source?? 'source goes here'}</code></p>
<p><code>{txXDR?? 'xdr goes here'}</code></p> -->

<!-- <style>
    ol li {
        list-style-type:decimal;
    }

    ul li {
        list-style: disc;
    }
</style> -->
