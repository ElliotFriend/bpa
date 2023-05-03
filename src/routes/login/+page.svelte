<script>
    import { redirect } from '@sveltejs/kit'
    import { goto } from '$app/navigation'
    import { browser } from '$app/environment'
    import { writable } from 'svelte/store'
    import { loginUser } from '$lib/utils/walletStore'

    export let data
    console.log(data)

    let pincode = writable()
    let errorMessage = writable()

    const login = async () => {
        try {
            errorMessage.set(null)
            await loginUser(data.bpaKeyId, $pincode?.toString())
            console.log('login successful?')
            goto('/dashboard')
        } catch (err) {
            console.error(err)
            errorMessage.set(err.body.message)
        }
    }
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
            {#if $errorMessage}
                <div class="alert alert-error shadow-lg mb-4">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="stroke-current flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            /></svg
                        >
                        <span>Error: {$errorMessage}</span>
                    </div>
                </div>
            {/if}
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 class="text-5xl font-bold">Login</h1>
                    <div class="form-control">
                        <label for="publicKey" class="label">
                            <span class="label-text">Public Key</span>
                        </label>
                        <input
                            bind:value={data.bpaPublicKey}
                            type="text"
                            placeholder="G..."
                            id="publicKey"
                            class="input input-bordered"
                            disabled
                        />
                    </div>
                    <div class="form-control">
                        <label for="pincode" class="label">
                            <span class="label-text">Pincode</span>
                        </label>
                        <input
                            bind:value={$pincode}
                            type="number"
                            id="pincode"
                            class="input input-bordered"
                        />
                    </div>
                    <div class="form-control mt-6">
                        <button on:click={login} class="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
