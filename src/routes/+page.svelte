<script>
    import { modalStore } from '$lib/stores/modalStore'
    import { getContext } from 'svelte';
    import { derived, get } from 'svelte/store';
    import PinModal from '$lib/components/PinModal.svelte';
    import TxPreviewModal from '$lib/components/txPreviewModal.svelte';


    const user = getContext('user');
    // let pinInput;
    // $: pinput = pinInput
    //     ? pinInput.grab()
    //     : "nevermind..."

    let pincode;
    // const view = derived(pin, $pin => `Your pincode was ${$pin}`)
    // $: view = pinput
    //     ? get(pinput)
    //     : "nevermind..."
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 class="text-5xl font-bold">Welcome to BasicPay!</h1>
            <p class="py-6">The app that lets you pay, <em>basically</em>, anyone.</p>
            <a href="/signup" class="btn btn-primary">Signup Now</a>
            <a href="/dashboard" class="btn">Dashboard</a>
            <a href="#my-modal-2" class="btn">Modal</a>
        </div>
    </div>
</div>

<!-- <TxPreviewModal /> -->

<!-- <PinModal
	header="Signup"
	description="Please provide a 6-digit passcode to sign up. This passcode will be used to encrypt the secret key for your Stellar address. Your secret key will be stored on your device. You will be the only one to ever have custody over this key."
	button="Signup"
    bind:this={pincode}
/> -->

