<script>
    /** @type {import('./$types').PageData} */
    export let data
    let errorMessage = null

    import { getBalanceHomeDomains, getAccountBalances, startTransaction } from '$lib/utils/horizonQueries'
    import { getSep10Domains } from '$lib/utils/sep10'
    import { initiateTransfer } from '$lib/utils/sep24'
    import { webAuthStore } from '$lib/stores/webAuthStore'
    import { transfers } from '$lib/stores/transfersStore'

    let homeDomainPromise = async () => {
        let balances = await getAccountBalances(data.publicKey)
        let balancesWithHomeDomains = await getBalanceHomeDomains(balances)
        return getSep10Domains(balancesWithHomeDomains)
    }

    import { modalStore } from '$lib/stores/modalStore'
    import PinModal from '$lib/components/PinModal.svelte';
    import { getContext } from 'svelte'
    const { open } = getContext('simple-modal')
    import { getChallengeTransaction, validateChallengeTransaction } from '$lib/utils/sep10'
    import ErrorAlert from '$lib/components/ErrorAlert.svelte'
    import { Asset, Memo, Operation } from 'stellar-sdk'

    const transfer = async (direction, homeDomain = 'testanchor.stellar.org') => {
        let { id, type, url } = await initiateTransfer($webAuthStore.token, direction, homeDomain)
        console.log('interactive transfer response', { id, type, url })
        let interactiveUrl = `${url}&callback=postMessage`
        let popup = window.open(interactiveUrl, 'bpaTransferWindow', 'popup')
        transfers.add(homeDomain, { id, type, url })
        window.addEventListener(
            "message",
            async (event) => {
                console.log('here is the event i heard', event)
                let transaction = await startTransaction(data.publicKey)
                transaction = transaction
                    .addMemo(Memo.hash(Buffer.from(event.data.transaction.withdraw_memo, 'base64').toString('hex')))
                    .addOperation(Operation.payment({
                        destination: event.data.transaction.withdraw_anchor_account,
                        amount: event.data.transaction.amount_in,
                        asset: new Asset('SRT', 'GCDNJUBQSX7AJWLJACMJ7I4BC3Z47BQUTMHEICZLE6MU4KQBRYG5JY6B')
                    }))
                    .setTimeout(300)
                    .build()
                console.log(transaction)
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
            },
            false
        )
    }

    const auth = async (homeDomain = 'testanchor.stellar.org') => {
        let { transaction, network_passphrase } = await getChallengeTransaction(data.publicKey, homeDomain)
        $modalStore.txXDR = transaction
        $modalStore.challengeNetwork = network_passphrase
        let results = await validateChallengeTransaction(transaction, network_passphrase, data.publicKey)
        console.log('results in transfer page', results)
        open(PinModal,
            {
                hasPincodeForm: true,
                challengeTransaction: true,
                body: 'Please confirm your ownership of this account by signing this challenge transaction. This transaction has already been checked and verified and everything looks good from what we can tell. Feel free to double-check that everything lines up with the SEP-0010 challenge yourself, though.'
            }, { },
            {
                onOpen: () => {
                    $modalStore.errorMessage = null
                },
                onOpened: () => {
                    $modalStore.confirmingPincode = true
                },
                onClose: () => {
                    console.log('closing, here is the current error message', $modalStore.errorMessage)
                    if ($modalStore.errorMessage) {
                        errorMessage = $modalStore.errorMessage
                    }
                },
                onClosed: () => {
                    $modalStore.txXDR = null
                    $modalStore.challengeNetwork = null
                }
            }
        )
    }
</script>

<div class="my-10 mx-20 prose">
    <h1>Transfers</h1>
    {#if errorMessage}
        <ErrorAlert errorMessage={errorMessage} />
    {/if}
    <h2>Initiate a Transfer</h2>
    <p>Below, are listed all of your trusted assets with the required infrastructure to facilitate deposit and/or withdrawals.</p>

    {#await homeDomainPromise()}
        <p>loading...</p>
    {:then homeDomains}
        {#each homeDomains as asset}
            {asset.asset_code} <small>{asset.home_domain}</small>
            <form on:submit|preventDefault={() => transfer('deposit', asset.home_domain)}>
                <button class="btn" type="submit">SEP-24 Deposit</button>
            </form>
            <form on:submit|preventDefault={() => transfer('withdraw', asset.home_domain)}>
                <button class="btn" type="submit">SEP-24 Withdraw</button>
            </form>
            <form on:submit|preventDefault={() => auth(asset.home_domain)}>
                <button class="btn" type="submit">Authenticate</button>
            </form>
        {/each}
    {/await}
</div>

