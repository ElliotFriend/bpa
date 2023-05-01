<script>
    import Navbar from './Navbar.svelte';
    import Sidebar from './Sidebar.svelte';
    import Footer from './Footer.svelte';
    import TxPreviewModal from '$lib/components/TxPreviewModal.svelte';

    /** @type {import('./$types').LayoutData} */
    export let data;
    let bpaPublicKey = data.bpaPublicKey
</script>

<div class="flex flex-col">

    <Navbar {bpaPublicKey} />

    <div class="flex flex-row">
        <Sidebar />
        <main class="flex-1 overflow-y-auto">
            <slot />
        </main>
    </div>

    <Footer />

</div>

<TxPreviewModal />
