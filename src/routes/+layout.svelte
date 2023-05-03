<script>
    // import Modal from '$lib/components/Modal.svelte';
    import '../app.postcss'
    import { setContext } from 'svelte'
    import { writable } from 'svelte/store'

    /** @type {import('./$types').LayoutData} */
    export let data

    const user = writable()
    $: user.set(data.user)

    setContext('user')
</script>

<slot />
