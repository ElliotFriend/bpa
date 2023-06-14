<script>
    // import { getContext } from 'svelte'

    import { startTransaction } from '$lib/utils/horizonQueries'
    import { Operation, Asset, Memo } from 'stellar-sdk'

    import { contacts } from '$lib/stores/contactsStore'
    // import { txXDR } from '$lib/stores/txPreviewStore'
    // import ModalButton from '$lib/components/ModalButton.svelte'
    import TxPreviewModal from '$lib/components/TxPreviewModal.svelte';
    import { modalStore, modal } from '$lib/stores/modalStore'

    // const { open } = getContext('simple-modal')

    /** @type {import('./$types').PageData} */
    export let data;
    // console.log(data)

    $: destinationPublicKey = ''
    $: paymentAmount = null
    // $: otherPublicKey = ''
    // $: otherDestination = false
    // $: createAccount = false
    $: memoText = null
    // $: txXDR = null

    const handleSubmit = async () => {
        // create xdr
        let transaction = await startTransaction(data.publicKey)
        if (memoText) {
            transaction.addMemo(Memo.text(memoText))
        }
        transaction.addOperation(
            Operation.payment({
                destination: destinationPublicKey,
                amount: paymentAmount.toString(),
                asset: Asset.native()
            })
        )
        transaction = transaction.setTimeout(300).build()

        // update modalStore
        modalStore.update((state) => { return { ...state, txXDR: transaction.toXDR() }})

        // launch modal
        console.log("I'm handling it!")
        modal.set(TxPreviewModal)
        // document.getElementById('tx_preview_modal').showModal()
        // open(
        //     TxPreviewModal,
        //     {
        //         message: "whoa! What a surprise",
        //         txXDR
        //     }
        // )
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div class="form-control w-full max-w-xs">
        <label for="destination" class="label">
            <span class="label-text">Destination</span>
        </label>
    </div>
    <select
        id="destination"
        name="destination"
        class="select select-bordered"
        bind:value={destinationPublicKey}
    >
        <option value="" disabled selected>Select Recipient</option>
        {#if contacts}
            {#each $contacts as contact (contact.id)}
                <option value={contact.address}>{contact.name}</option>
            {/each}
        {/if}
    </select>
    <div class="form-control">
        <label for="amount" class="label">
            <span class="label-text">Amount</span>
        </label>
        <label class="input-group">
            <input
                id="amount"
                name="amount"
                type="text"
                placeholder="0.01"
                class="input input-bordered"
                bind:value={paymentAmount}
            />
            <span>XLM</span>
        </label>
    </div>
    <div class="form-control">
        <label for="memo" class="label">
            <span class="label-text">Memo</span>
        </label>
        <input
            id="memo"
            name="memo"
            type="text"
            placeholder="Optional"
            class="input input-bordered"
            bind:value={memoText}
        />
    </div>
    <div class="form-control">
        <!-- <ModalButton
            buttonText={"preview transaction"}
        /> -->
        <button type="submit" class="btn btn-primary" on:click={handleSubmit}>Preview2</button>
    </div>
</form>
