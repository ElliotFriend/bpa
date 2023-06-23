<script>
    /** @type {import('./$types').PageData} */
    export let data

    let errorMessage = null
    let publicKey = data.publicKey

    import { Buffer } from 'buffer'
    import { getBalanceHomeDomains, getAccountBalances, startTransaction } from '$lib/utils/horizonQueries'
    import { initiateTransfer6, queryTransfers6 } from '$lib/utils/sep6'
    import { getSep10Domains } from '$lib/utils/sep10'
    import { getSep12Fields, putSep12Fields, deleteSep12Customer } from '$lib/utils/sep12'
    import { initiateTransfer, queryTransfers } from '$lib/utils/sep24'
    import { webAuthStore } from '$lib/stores/webAuthStore'
    // import { transfers } from '$lib/stores/transfersStore'

    let homeDomainPromise = async () => {
        return getAccountBalances(publicKey)
        .then(balances => getBalanceHomeDomains(balances))
        .then(balancesWithHomeDomains => getSep10Domains(balancesWithHomeDomains))
        // let balancesWithHomeDomains = await getBalanceHomeDomains(balances)
        // return getSep10Domains(balancesWithHomeDomains)
    }

    import { modalStore } from '$lib/stores/modalStore'
    import PinModal from '$lib/components/PinModal.svelte';
    import TransferModal from '$lib/components/TransferModal.svelte'
    import { getContext } from 'svelte'
    const { open } = getContext('simple-modal')
    import { getChallengeTransaction, validateChallengeTransaction } from '$lib/utils/sep10'
    import ErrorAlert from '$lib/components/ErrorAlert.svelte'
    import { Asset, Memo, Operation } from 'stellar-sdk'

    const transfer = async (direction, assetCode, homeDomain = 'testanchor.stellar.org') => {
        let { id, type, url } = await initiateTransfer($webAuthStore[homeDomain], direction, homeDomain, {asset_code: assetCode, account: publicKey})
        console.log('interactive transfer response', { id, type, url })
        let interactiveUrl = `${url}&callback=postMessage`
        let popup = window.open(interactiveUrl, 'bpaTransferWindow', 'popup')
        // transfers.add(homeDomain, { id, type, url })
        window.addEventListener(
            "message",
            async (event) => {
                console.log('here is the event i heard', event)
                popup.close()
                let transaction = await startTransaction(publicKey)
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

    const auth = async (homeDomain) => {
        console.log('homeDomain', homeDomain)
        let { transaction, network_passphrase } = await getChallengeTransaction(publicKey, homeDomain)
        console.log('transaction', transaction)
        $modalStore.txXDR = transaction
        $modalStore.challengeNetwork = network_passphrase
        let results = await validateChallengeTransaction(transaction, network_passphrase, publicKey, homeDomain)
        console.log('results in transfer page', results)
        open(PinModal,
            {
                hasPincodeForm: true,
                challengeTransaction: true,
                challengeHomeDomain: homeDomain,
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

    const query = async (assetCode, homeDomain = 'testanchor.stellar.org') => {
        let { transactions } = await queryTransfers($webAuthStore[homeDomain], assetCode, homeDomain)
        console.log('transfers history', transactions)
    }

    const query6 = async (assetCode, homeDomain = 'testanchor.stellar.org') => {
        let { transactions } = await queryTransfers6($webAuthStore[homeDomain], assetCode, publicKey, homeDomain)
        console.log('transfers6 history', transactions)
    }

    const transfer6 = async (direction, assetCode, homeDomain = 'testanchor.stellar.org') => {
        let transfer6 = await initiateTransfer6($webAuthStore[homeDomain], assetCode, data.publicKey, direction, homeDomain)
        console.log(transfer6)
        return transfer6
    }

    const sep12Fields = async ( homeDomain = 'testAnchor.stellar.org', type = 'bank_account') => {
        let sep12fields = await getSep12Fields($webAuthStore[homeDomain], homeDomain, type)
        console.log('sep12fields', sep12fields)
    }

    const putFields = async (homeDomain = 'testanchor.stellar.org') => {
        let fields = {
            'first_name': 'steve',
        }
        let putResposne = await putSep12Fields($webAuthStore[homeDomain], fields, homeDomain )
        console.log('putResponse', putResposne)
    }

    const deleteCustomer = async (homeDomain = 'testanchor.stellar.org') => {
        let deleteResponse = await deleteSep12Customer($webAuthStore[homeDomain], publicKey, homeDomain)
        console.log('deleteResponse', deleteResponse)
    }

    const launchTransferModal = (homeDomain = 'testanchor.stellar.org') => {
        open(TransferModal, {
            homeDomain: homeDomain
        })
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
            <form on:submit|preventDefault={() => transfer6('deposit', asset.asset_code, asset.home_domain)}>
                <button class="btn" type="submit">SEP-6 Deposit</button>
            </form>
            <form on:submit|preventDefault={() => sep12Fields(asset.home_domain)}>
                <button class="btn" type="submit">GET SEP-12 Fields</button>
            </form>
            <form on:submit|preventDefault={() => putFields(asset.home_domain)}>
                <button class="btn" type="submit">PUT SEP-12 Fields</button>
            </form>
            <form on:submit|preventDefault={() => deleteCustomer(asset.home_domain)}>
                <button class="btn" type="submit">DELETE SEP-12 Customer</button>
            </form>
            <button class="btn" on:click={() => launchTransferModal(asset.home_domain)}>Launch Transfer Modal</button>
            <form on:submit|preventDefault={() => query6(asset.asset_code, asset.home_domain)}>
                <button class="btn" type="submit">Query SEP-6 Transfers</button>
            </form>
            <p>The following buttons already are working. Don't screw with them!</p>
            <form on:submit|preventDefault={() => transfer('deposit', asset.asset_code, asset.home_domain)}>
                <button class="btn btn-primary" type="submit">SEP-24 Deposit</button>
            </form>
            <form on:submit|preventDefault={() => transfer('withdraw', asset.asset_code, asset.home_domain)}>
                <button class="btn btn-primary" type="submit">SEP-24 Withdraw</button>
            </form>
            <form on:submit|preventDefault={() => auth(asset.home_domain)}>
                <button class="btn" type="submit">Authenticate</button>
            </form>
            <form on:submit|preventDefault={() => query(asset.asset_code, asset.home_domain)}>
                <button class="btn" type="submit">Query Transfers</button>
            </form>
        {/each}
    {/await}
</div>

