<script>
    import { page } from '$app/stores';
    import { fetchRecentPayments } from '$lib/utils/horizonQueries'
    import { contacts } from '$lib/stores/contactsStore'
    let publicKey = $page.data.publicKey
    let paymentsPromise = fetchRecentPayments(publicKey)
    // console.log('payments in RecentPayments', payments)
</script>

<div class="overflow-x-auto">
    <div class="prose mb-1">
        <h3>Recent Payments</h3>
    </div>
    {#await paymentsPromise}
        <p>loading...</p>
    {:then payments}
        <table class="table w-full">
            <!-- head -->
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Asset</th>
                    <th>Type</th>
                    <th>Direction</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                {#each payments as payment}
                    <tr>
                        <th>{payment.amount || payment.starting_balance}</th>
                        <td>
                            {#if payment.type === 'create_account' || payment.asset_type === 'native'}
                                XLM
                            {:else}
                                {payment.asset_type}
                            {/if}
                        </td>
                        <td>{payment.type}</td>
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
                                    {payment.from}
                                {:else}
                                    {payment.to}
                                {/if}
                            {:else if 'funder' in payment}
                                {#if payment.funder === publicKey}
                                    {payment.account}
                                {:else}
                                    {payment.funder}
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
