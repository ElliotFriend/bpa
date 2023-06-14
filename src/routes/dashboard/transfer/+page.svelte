<script>
    /** @type {import('./$types').PageData} */
    export let data
    $: errorMessage = null
    // console.log('routes/transfer/+page.svelte data', data)

    import { getBalanceHomeDomains, getAccountBalances } from '$lib/utils/horizonQueries'
    import { initiateTransfer } from '$lib/utils/sep24'
    import { webAuthStore } from '$lib/stores/webAuthStore'
    let homeDomainPromise = async () => {
        let balances = await getAccountBalances(data.publicKey)
        return getBalanceHomeDomains(balances)
    }

    import { modalStore } from '$lib/stores/modalStore'
    import PinModal from '$lib/components/PinModal.svelte';
    import { getContext } from 'svelte'
    const { open } = getContext('simple-modal')
    import { getChallengeTransaction, validateChallengeTransaction } from '$lib/utils/sep10'

    const transfer = async (direction, homeDomain = 'testanchor.stellar.org') => {
        let interactive = await initiateTransfer($webAuthStore.token, direction, homeDomain)
        console.log('interactive deposit response', interactive)
        window.open(interactive.url, 'chromeWindow', 'popup')
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
                    if ($modalStore.errorMessage) {
                        errorMessage = null
                    } else if (!$modalStore.confirmingPincode) {
                        errorMessage = null
                    }
                },
            }
        )
    }
</script>

<div class="my-10 mx-20 prose">
    <h1>Transfers</h1>
    <h2>Initiate a Transfer</h2>
    <p>Below, are listed all of your trusted assets with the required infrastructure to facilitate deposit and/or withdrawals.</p>

    {#await homeDomainPromise()}
        <p>loading...</p>
    {:then homeDomains}
        {#each homeDomains as asset}
            {asset.asset_code} <small>{asset.home_domain}</small>
            <form on:submit|preventDefault={() => transfer('deposit', asset.home_domain)}>
                <button class="btn">SEP-24 Deposit</button>
            </form>
            <form on:submit|preventDefault={() => transfer('withdraw', asset.home_domain)}>
                <button class="btn">SEP-24 Withdraw</button>
            </form>
            <form on:submit|preventDefault={() => auth(asset.home_domain)}>
                <button class="btn" type="submit">Authenticate</button>
            </form>
        {/each}
    {/await}
</div>

