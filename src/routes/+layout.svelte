<script>
    export const prerender = true
    export const ssr = false

    import '../app.postcss'

    import Modal from 'svelte-simple-modal'
    import { modal } from '$lib/stores/modalStore'
</script>

<Modal
    show={$modal}
    classContent="rounded bg-base-200"
>
    <slot />
</Modal>

