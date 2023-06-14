<script>
    export const prerender = true

    import '../app.postcss'


    import Modal, { bind } from 'svelte-simple-modal'
    import TxPreviewModal from '$lib/components/TxPreviewModal.svelte';
    import { modal } from '$lib/stores/modalStore'
    // const showModal = () => modal.set(bind(TxPreviewModal, { message: "It's a transaction!" }))
    export let data
    // console.log('routes/layout data', data)
</script>

<Modal
    show={$modal}
    classContent="rounded bg-base-200"
>
    <slot />
</Modal>

