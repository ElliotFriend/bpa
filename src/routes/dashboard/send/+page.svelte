<script>
    import { contacts } from '$lib/stores/contactsStore'
    import { fetchAccount } from '$lib/utils/horizonQueries'
    import PinModal from '$lib/components/PinModal.svelte'
    import { getContext } from 'svelte'
    const { open } = getContext('simple-modal')
    import { modalStore } from '$lib/stores/modalStore'
    import { startTransaction } from '$lib/utils/horizonQueries'
    import { Operation, Asset, Memo } from 'stellar-sdk'
    import ErrorAlert from '$lib/components/ErrorAlert.svelte'
    import WarningAlert from '../../../lib/components/WarningAlert.svelte'

    /** @type {import('./$types').PageData} */
    export let data

    let sourcePublicKey = data.publicKey

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

    let destinationPublicKey = ''
    let otherPublicKey = ''
    let otherDestination = false
    let createAccount = false
    let paymentAmount = null
    let memoText = null
    let errorMessage = null

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
        open(
            PinModal,
            {
                hasPincodeForm: true,
                realTransaction: true,
            },
            {},
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
                },
            }
        )
    }
</script>

<div class="prose mx-20 my-10">
    <h1>Send a Payment</h1>
    <p>This is where you'll be able to send a payment</p>

    <p>Confirming: <code>{$modalStore.confirmingPincode}</code></p>

    {#if errorMessage}
        <ErrorAlert errorMessage={errorMessage} />
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
                class="select-bordered select"
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
                    class="input-bordered input w-full max-w-xs"
                    bind:value={otherPublicKey}
                    on:change={checkDestinationFunded(otherPublicKey)}
                />
            </div>
        {/if}
        {#if createAccount}
            <WarningAlert
                warningMessage="Account Not Funded: You are sending a payment to an account that does not yet
            exist on the Stellar ledger. Your payment will take the form of a
            <code>creatAccount</code> operation, and the amount you send must be at least 1XLM."
            />
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
                    class="input-bordered input"
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
                class="input-bordered input"
                bind:value={memoText}
            />
        </div>
        <div class="form-control">
            <button type="submit" class="btn-primary btn">Preview</button>
        </div>
    </form>
</div>
