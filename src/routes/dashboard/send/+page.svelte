<script>
    import { browser } from '$app/environment'
    import { enhance } from '$app/forms'
    import { page } from '$app/stores'
    // console.log('/routes/send/+page.svelte $page', $page)
    import { contacts } from '$lib/stores/contactsStore'
    // import { getSourcePublicKey } from '$lib/stores/walletStore'
    import { fetchAccount } from '$lib/utils/horizonQueries'
    import PinModal from '$lib/components/PinModal.svelte'
    import { getContext } from 'svelte'
    const { open } = getContext('simple-modal')
    import { modalStore } from '$lib/stores/modalStore'
    import { startTransaction } from '$lib/utils/horizonQueries'
    import { Operation, Asset, Memo } from 'stellar-sdk'
    // import { modalStore } from '$lib/stores/modalStore'
    // import ModalButton from '$lib/components/ModalButton.svelte'

    /** @type {import('./$types').PageData} */
    export let data
    // console.log('/routes/send/+page.svelte data', data)

    let sourcePublicKey = data.publicKey
    // let previewing = false

    let checkDestinationFunded = (publicKey) =>
        fetchAccount(publicKey).then((res) => (createAccount = !res.funded))

    let checkDestination = (publicKey) => {
        createAccount = false
        otherDestination = false
        if (publicKey === 'other') {
            otherDestination = true
            destinationPublicKey = otherPublicKey
        } else {
            checkDestinationFunded(publicKey)
        }
    }

    $: destinationPublicKey = ''
    $: otherPublicKey = ''
    $: otherDestination = false
    $: createAccount = false
    $: paymentAmount = null
    $: memoText = null
    // $: txXDR = null
    $: errorMessage = null

    const previewTransaction = async () => {
        let transaction = await startTransaction(data.publicKey)
        if (memoText) {
            transaction.addMemo(Memo.text(memoText))
        }

        if (createAccount) {
            transaction.addOperation(
                Operation.createAccount({
                    destination: destinationPublicKey,
                    startingBalance: paymentAmount.toString(),
                })
            )
        } else {
            transaction.addOperation(
                Operation.payment({
                    destination: destinationPublicKey,
                    amount: paymentAmount.toString(),
                    asset: Asset.native(),
                })
            )
        }
        transaction = transaction.setTimeout(300).build()
        $modalStore.txXDR = transaction.toXDR()
        open(PinModal,
            {
                hasPincodeForm: true,
                realTransaction: true,
            }, { },
            {
                onOpen: () => {
                    $modalStore.errorMessage = null
                },
                onOpened: () => {
                    $modalStore.confirmingPincode = true
                },
                onClose: () => {
                    if ($modalStore.errorMessage) {
                        errorMessage = null
                    } else if (!$modalStore.confirmingPincode) {
                        errorMessage = null
                    }
                },
                onClosed: () => {
                    $modalStore.txXDR = null
                }
            }
        )
    }
</script>

<h1>Send a Payment</h1>
<p>This is where you'll be able to send a payment</p>

<p>Confirming: <code>{$modalStore.confirmingPincode}</code></p>

{#if errorMessage}
    <div class="alert alert-error shadow-lg">
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                /></svg
            >
            <span
                >{errorMessage}</span
            >
        </div>
    </div>
{/if}

<form on:submit|preventDefault={previewTransaction}>
    <input type="hidden" id="source" name="source" value={sourcePublicKey} />
    <div class="form-control w-full max-w-xs">
        <label for="destination" class="label">
            <span class="label-text">Destination</span>
        </label>
        <select
            id="destination"
            name="destination"
            class="select select-bordered"
            bind:value={destinationPublicKey}
            on:change={checkDestination(destinationPublicKey)}
        >
            <option value="" disabled selected>Select Recipient</option>
            {#if contacts}
                {#each $contacts as contact (contact.id)}
                    <option value={contact.address}>{contact.name}</option>
                {/each}
            {/if}
            <option value="other">Other...</option>
        </select>
    </div>
    {#if otherDestination}
        <div class="form-control">
            <label for="otherDestination" class="label">
                <span class="label-text">Destination Public Key</span>
            </label>
            <input
                id="otherDestination"
                name="otherDestination"
                type="text"
                placeholder="G..."
                class="input input-bordered w-full max-w-xs"
                bind:value={otherPublicKey}
                on:change={checkDestinationFunded(otherPublicKey)}
            />
        </div>
    {/if}
    {#if createAccount}
        <div class="alert alert-warning shadow-lg">
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
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    /></svg
                >
                <span
                    >Account Not Funded: You are sending a payment to an account that does not yet
                    exist on the Stellar ledger. Your payment will take the form of a
                    <code>creatAccount</code> operation, and the amount you send must be at least 1XLM.</span
                >
            </div>
        </div>
        <input type="hidden" id="createAccount" name="createAccount" value={createAccount} />
    {/if}
    <div class="form-control">
        <label for="amount" class="label">
            <span class="label-text">Amount</span>
        </label>
        <label class="input-group">
            <input
                id="amount"
                name="amount"
                type="text"
                placeholder="0.01"
                class="input input-bordered"
                bind:value={paymentAmount}
            />
            <span>XLM</span>
        </label>
    </div>
    <div class="form-control">
        <label for="memo" class="label">
            <span class="label-text">Memo</span>
        </label>
        <input
            id="memo"
            name="memo"
            type="text"
            placeholder="Optional"
            class="input input-bordered"
            bind:value={memoText}
        />
    </div>
    <div class="form-control">
        <!-- <ModalButton
            buttonText="Preview"
            txXDR={txXDR}
            source={sourcePublicKey}
        /> -->
        <button type="submit" class="btn btn-primary">Preview</button>
    </div>
</form>
