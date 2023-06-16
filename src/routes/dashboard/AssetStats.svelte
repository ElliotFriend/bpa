<script>
    import { page } from '$app/stores';
    import { fetchAccount } from '$lib/utils/horizonQueries'

    let accountPromise = fetchAccount($page.data.publicKey)
</script>

<div class="prose mt-2 mb-1">
    <h3>Assets Overview</h3>
</div>
<div class="stats bg-primary text-primary-content w-full">
    {#await accountPromise}
        <div class="stat">
            <div class="stat-title">Account Balances</div>
            <div class="stat-value">loading...</div>
        </div>
    {:then { account }}
        {#each account.balances as balance}
            <div class="stat">
                <div class="stat-title">{balance.asset_code ?? 'XLM'} Balance</div>
                <div class="stat-value">
                    {parseFloat(balance.balance).toFixed(2)}
                    {balance.asset_code ?? 'XLM'}
                </div>
            </div>
        {/each}
    {:catch error}
        <p style="color: red;">{error}</p>
    {/await}
</div>
