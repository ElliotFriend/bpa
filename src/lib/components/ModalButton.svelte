<script>
    import { writable } from "svelte/store";
    import Modal, { bind } from 'svelte-simple-modal'
    import TxPreviewModal from "./TxPreviewModal.svelte";
    const modal = writable(null)
    export let buttonText = 'Show modal'
    export let txXDR
    export let source
    const showModal = () => modal.set(bind(TxPreviewModal, { message: 'Surprise', txXDR, source }))
</script>

<Modal show={$modal}>
    <button class="btn btn-primary" on:click={showModal}>{buttonText}</button>
</Modal>
