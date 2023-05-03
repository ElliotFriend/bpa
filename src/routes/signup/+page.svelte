<script>
    import { browser } from '$app/environment'
    import { writable } from 'svelte/store'
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation'

    import { registerUser } from '$lib/utils/walletStore'
    import { generateKeypair } from '$lib/utils/generateKeypair'

    let keypair = writable()
    let publicKey = writable()
    let secretKey = writable()
    let showSecret = writable(false)
    let pincode = writable()
    let confirmPincode = writable()
    let errorMessage = writable()

    const newKeypair = () => {
        if (browser) {
            keypair.set(generateKeypair())
            publicKey.set($keypair.publicKey())
            secretKey.set($keypair.secret())
        }
    }

    const signup = async () => {
        try {
            errorMessage.set(null)
            registerUser($publicKey, $secretKey, $pincode, $confirmPincode)
            // console.log(keyId)
            await fetch('/signup', {
                method: 'POST',
                body: JSON.stringify({ publicKey: $publicKey }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            goto('/dashboard')
        } catch (err) {
            console.error(err)
            errorMessage.set(err.body.message)
        }
    }

    onMount(() => {
        newKeypair()
    })
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Signup now!</h1>
            <p class="py-6">
                Please provide a 6-digit pincode to sign up. This pincode will be used to encrypt
                the secret key for your Stellar address, before it is stored in your browser's local
                storage. Your secret key to this address will be stored on your device. You will be
                the only one to ever have custody over this key.
            </p>
        </div>
        <div class="flex-col">
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
                        <span>Error: {@html $errorMessage}</span>
                    </div>
                </div>
            {/if}
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <label for="publicKey" class="label">
                            <span class="label-text">Public Key</span>
                        </label>
                        <input
                            type="text"
                            placeholder="G..."
                            id="publicKey"
                            class="input input-bordered"
                            bind:value={$publicKey}
                            disabled
                        />
                        <label class="label">
                            <button on:click={newKeypair} class="label-text-alt link link-hover"
                                >Generate new address?</button
                            >
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer pb-0">
                            <span class="label-text">Show secret key?</span>
                            <input type="checkbox" class="toggle" bind:checked={$showSecret} />
                        </label>
                    </div>
                    {#if $showSecret}
                        <div class="form-control">
                            <label for="secretKey" class="label">
                                <span class="label-text">Secret Key</span>
                            </label>
                            <input
                                type="text"
                                placeholder="S..."
                                id="secretKey"
                                class="input input-bordered"
                                bind:value={$secretKey}
                                disabled
                            />
                        </div>
                    {/if}
                    <div class="form-control">
                        <label for="pincode" class="label">
                            <span class="label-text">Pincode</span>
                        </label>
                        <input
                            type="number"
                            id="pincode"
                            class="input input-bordered"
                            bind:value={$pincode}
                        />
                    </div>
                    <div class="form-control">
                        <label for="confirmPincode" class="label">
                            <span class="label-text">Confirm Pincode</span>
                        </label>
                        <input
                            type="number"
                            id="confirmPincode"
                            class="input input-bordered"
                            bind:value={$confirmPincode}
                        />
                    </div>
                    <div class="form-control mt-6">
                        <button on:click={signup} class="btn btn-primary">Signup</button>
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <a class="label-text-alt link link-hover" href="/login"
                                >Existing users can login here</a
                            >
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
