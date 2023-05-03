<script>
    import { page } from '$app/stores'
</script>

<div class="prose mx-auto my-10">
    <h1>Oops!</h1>
    <p>Looks like an error has occurred. The error message received was:</p>
    <pre><code>{$page.error.message}</code></pre>
</div>
