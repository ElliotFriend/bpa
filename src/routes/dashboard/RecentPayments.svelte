<script>
    import { page } from '$app/stores';
    import { fetchRecentPayments } from '$lib/utils/horizonQueries'
    import TruncatedPublicKey from '$lib/components/TruncatedPublicKey.svelte';
    let publicKey = $page.data.publicKey
    let paymentsPromise = fetchRecentPayments(publicKey)
</script>

<div class="overflow-x-auto">
    <div class="prose mb-1">
        <h3>Recent Payments</h3>
    </div>
    {#await paymentsPromise}
        <p>Loading payments history...</p>
    {:then payments}
        <table class="table">
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Asset</th>
                    <th>Direction</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {#each payments as payment}
                    <tr>
                        <th>
                            {#if payment.amount}
                                {parseFloat(payment.amount).toFixed(2)}
                            {:else if payment.starting_balance}
                                {parseFloat(payment.starting_balance).toFixed(2)}
                            {/if}
                        </th>
                        <td>
                            {#if payment.type === 'create_account' || payment.asset_type === 'native'}
                                XLM
                            {:else}
                                {payment.asset_code}
                            {/if}
                        </td>
                        <td>
                            {#if payment.to === publicKey || ('funder' in payment && payment.funder !== publicKey)}
                                Received
                            {:else}
                                Sent
                            {/if}
                        </td>
                        <td>
                            {#if 'to' in payment}
                                {#if payment.to === publicKey}
                                    <TruncatedPublicKey publicKey={payment.from} />
                                {:else}
                                    <TruncatedPublicKey publicKey={payment.to} />
                                {/if}
                            {:else if 'funder' in payment}
                                {#if payment.funder === publicKey}
                                    <TruncatedPublicKey publicKey={payment.account} />
                                {:else}
                                    <TruncatedPublicKey publicKey={payment.funder} />
                                {/if}
                            {/if}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:catch error}
        <p>something went wrong... {error.toString()}</p>
    {/await}
</div>
