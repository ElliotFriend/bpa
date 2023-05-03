<script>
    import { getAccountBalances } from '$lib/utils/horizonQueries'
    import { enhance } from '$app/forms'

    export let data
    let balancesPromise = getAccountBalances(data.bpaPublicKey)
</script>

<div class="my-10 mx-20">
    <h1 class="text-5xl font-bold">Assets</h1>
    <h2 class="text-3xl font-bold">Add Trusted Assets</h2>
    <form method="POST" action="?/preview" use:enhance>
        <input type="hidden" id="source" name="source" value={data.bpaPublicKey} />
        <input type="hidden" id="addAsset" name="assAsset" value={true} />
        <label for="asset" class="label">
            <span class="label-text">Asset</span>
        </label>
        <select id="asset" name="asset" class="select select-bordered w-full max-w-xs">
            <option disabled selected>Select Asset</option>
            {#each data.assets as asset}
                <option value={asset.asset}>{asset.asset.slice()}</option>
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
                                    <form method="POST" action="?/preview" use:enhance>
                                        <input
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
                                        />
                                        <button class="btn btn-square btn-error">
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
