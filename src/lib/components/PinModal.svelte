<script>
    import { getContext } from 'svelte';
    import { writable } from 'svelte/store';
    const user = getContext('user');
    const pinInput = writable();

    export function grab() {
        return $pinInput;
    }

    export let header;
    export let description;
    export let button;
    export const value = $pinInput;
</script>

<input type="checkbox" id="pincode-modal" class="modal-toggle" />
<div class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">{header}</h3>
        <p class="py-4">{description}</p>
        <input
            type="number"
            id="pincode-input"
            class="text-center w-full input input-bordered font-mono tracking-widest"
            bind:value={$pinInput}
        />
        <div class="modal-action">
            <label for="pincode-modal" class="btn btn-primary">{button}</label>
        </div>
    </div>
</div>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }
</style>
