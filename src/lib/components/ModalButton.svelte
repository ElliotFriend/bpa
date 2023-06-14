<script>
    import { writable } from "svelte/store";
    import Modal, { bind } from 'svelte-simple-modal'
    import TxPreviewModal from "./TxPreviewModal.svelte";
    // const modal = writable(null)
    import { modal } from '$lib/stores/modalStore'
    export let buttonText = 'Show modal'
    // export let source
    // export let message
    const showModal = () => modal.set(TxPreviewModal)
</script>

<button class="btn btn-primary" on:click={showModal}>{buttonText}</button>
