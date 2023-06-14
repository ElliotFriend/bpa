<script>
    import { Asset, Operation } from 'stellar-sdk'
    import { getAccountBalances, startTransaction } from '$lib/utils/horizonQueries'
    import { modalStore } from '$lib/stores/modalStore'
    import PinModal from '$lib/components/PinModal.svelte';
    import { enhance } from '$app/forms'
    import { getContext } from 'svelte'
    const { open } = getContext('simple-modal')

    /** @type {import('./$types').PageData} */
    export let data
    // let addAsset
    let balancesPromise = getAccountBalances(data.publicKey)
    $: errorMessage = null
    $: addAsset = null

    const previewTransaction = async (adding = true, removeAsset = null) => {
        let transaction = await startTransaction(data.publicKey)
        let asset = adding && addAsset && !removeAsset ? addAsset : removeAsset
        const assetObj = new Asset(asset.split('-')[0], asset.split('-')[1])

        if (adding) {
            transaction.addOperation(
                Operation.changeTrust({
                    asset: assetObj
                })
            )
        } else {
            transaction.addOperation(
                Operation.changeTrust({
                    asset: assetObj,
                    limit: '0'
                })
            )
        }

        transaction = transaction.setTimeout(300).build()
        $modalStore.txXDR = transaction.toXDR()
        open(PinModal,
            {
                hasPincodeForm: true,
                hasTransaction: true,
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

<div class="my-10 mx-20">
    <h1 class="text-5xl font-bold">Assets</h1>
    <h2 class="text-3xl font-bold">Add Trusted Assets</h2>
    <form on:submit|preventDefault={previewTransaction}>
        <!-- <input type="hidden" id="source" name="source" value={data.bpaPublicKey} /> -->
        <!-- <input type="hidden" id="addAsset" name="addAsset" value={true} /> -->
        <label for="asset" class="label">
            <span class="label-text">Asset</span>
        </label>
        <select id="asset" name="asset" class="select select-bordered w-full max-w-xs" bind:value={addAsset}>
            <option disabled selected>Select Asset</option>
            {#each data.assets as { asset }}
                <option value={asset}>{asset.slice()}</option>
            {/each}
        </select>
        <button class="btn btn-primary">Add Asset</button>
    </form>
    <h2 class="text-3xl font-bold">Existing Balances</h2>
    {#await balancesPromise}
        <p>loading...</p>
    {:then { balances }}
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Balance</th>
                        <th>Asset</th>
                        <th>Issuer</th>
                        <th>Liabilities</th>
                        <th>Limit</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {#each balances as balance}
                        <tr>
                            <td>{balance.balance}</td>
                            <td>{balance.asset_code ?? 'XLM'}</td>
                            <td>{balance.asset_issuer ?? 'n/a'}</td>
                            <td
                                >{(
                                    parseFloat(balance.buying_liabilities) +
                                    parseFloat(balance.selling_liabilities)
                                ).toFixed(7)}</td
                            >
                            <td>{balance.limit ?? 'n/a'}</td>
                            <th>
                                {#if balance.asset_type !== 'native'}
                                    <form on:submit|preventDefault={() => previewTransaction(false, `${balance.asset_code}-${balance.asset_issuer}`)}>
                                        <!-- <input
                                            type="hidden"
                                            name="source"
                                            id="source"
                                            value={data.bpaPublicKey}
                                        />
                                        <input
                                            type="hidden"
                                            name="asset"
                                            id="asset"
                                            value={`${balance.asset_code}-${balance.asset_issuer}`}
                                        /> -->
                                        <button type="submit" class="btn btn-square btn-error">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                class="w-5 h-5"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </form>
                                {/if}
                            </th>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/await}
</div>
