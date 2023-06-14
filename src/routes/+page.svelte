<script>
    import { getContext } from 'svelte';
    const { open } = getContext('simple-modal')
    import { bind } from 'svelte-simple-modal'
    import TxPreviewModal from '$lib/components/TxPreviewModal.svelte';
    import { modal } from '$lib/stores/modalStore'
    const showModal = () => modal.set(bind(TxPreviewModal, { message: "It's your page's transaction!" }))
</script>
<div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 class="text-5xl font-bold">Welcome to BasicPay!</h1>
            <p class="py-6">The app that lets you pay, <em>basically</em>, anyone.</p>
            <a href="/signup" class="btn btn-primary">Signup Now</a>
            <a href="/dashboard" class="btn">Dashboard</a>
            <button on:click={showModal} class="btn btn-primary">Show modal</button>
        </div>
    </div>
</div>
