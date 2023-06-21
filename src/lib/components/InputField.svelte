<script>
    export let value = ''
    export let label = ''
    export let type = 'text'

    const typeAction = (node) => {
        node.type = type
        node.id = label
        node.name = label
    }
</script>

<div class="form-control">
    {#if label}
        <label class="label" for={label}>
            <span class="label-text">{label}</span>
        </label>
    {/if}
    <input class="input input-bordered w-full" use:typeAction bind:value={value} />
</div>
