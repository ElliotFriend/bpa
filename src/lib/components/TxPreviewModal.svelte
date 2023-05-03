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
    export let message = 'Hi'
    export let txXDR
    export let source
</script>
<p>🎉 {message} 🍾</p>
<p><code>{source?? 'source goes here'}</code></p>
<p><code>{txXDR?? 'xdr goes here'}</code></p>
