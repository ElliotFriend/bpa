<script>
    import { modalStore } from '$lib/stores/modalStore'
    console.log("Hi, there! Greetings from TXPreviewModal.svelte")
</script>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{$modalStore.title}</h3>
    <p class="py-4">{$modalStore.body}</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">{$modalStore.button}</label>
    </div>
  </div>
</div>
