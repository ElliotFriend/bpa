<script>
    export let field
    export let fieldInfo

    export let value = ''
</script>

<div class="form-control w-full">
    <label class="label" for={`transfer-field-${field}`}>
        <span class="label-text">{field}</span>
        {#if fieldInfo.optional}
            <span class="label-text-alt">Optional</span>
        {/if}
    </label>
    {#if 'choices' in fieldInfo}
        <select class="select select-bordered" name={`transfer-field-${field}`} id={`transfer-field-${field}`} bind:value={value}>
            <option value="" disabled selected>Select one</option>
            {#each fieldInfo.choices as choice}
                <option>{choice}</option>
            {/each}
        </select>
    {:else}
        <input type="text" class="input input-bordered" name={`transfer-field-${field}`} id={`transfer-field-${field}`} bind:value={value} />
    {/if}
    {#if fieldInfo.description}
        <label class="label" for={`transfer-field-${field}`}>
            <span class="label-text-alt">{fieldInfo.description}</span>
        </label>
    {/if}
</div>
