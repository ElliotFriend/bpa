<script>
    import Navbar from './Navbar.svelte'
    import Sidebar from './Sidebar.svelte'
    import Footer from './Footer.svelte'
</script>

<div class="flex flex-col">
    <Navbar />

    <div class="flex flex-row">
        <Sidebar />
        <main class="flex-1 overflow-y-auto">
            <slot />
        </main>
    </div>

    <Footer />
</div>
