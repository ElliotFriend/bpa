<script>
    import { webAuthStore } from '$lib/stores/webAuthStore'
    import { queryTransfers } from '$lib/utils/sep24'

    const transfersPromise = async () => {
        let allTransfers = []
        for (const homeDomain in $webAuthStore) {
            let { transactions } = await queryTransfers(
                $webAuthStore[homeDomain],
                'SRT',
                homeDomain
            )
            allTransfers.push(...transactions)
        }
        // console.log(allTransfers)
        return allTransfers
    }
</script>

<div class="overflow-x-auto">
    <div class="prose mb-1">
        <h3>Transfer History</h3>
    </div>
    {#await transfersPromise() then transfers}
        <table class="table-compact table w-full table-auto">
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Asset</th>
                    <th>Direction</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>More Info</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {#each transfers as transfer, i (transfer.id)}
                    <tr>
                        <th>{transfer.amount_in}</th>
                        <td>SRT</td>
                        <td>{transfer.kind}</td>
                        <td>{transfer.status}</td>
                        <td>{new Date(Date.parse(transfer.started_at)).toLocaleString()}</td>
                        <td>
                            {#if transfer.status === 'completed'}
                                <a
                                    target="_blank"
                                    href={`https://stellar.expert/explorer/testnet/tx/${transfer.stellar_transaction_id}`}
                                    >View Stellar transaction</a
                                >
                            {:else}
                                <a target="_blank" href={transfer.more_info_url}>View more info</a>
                            {/if}
                        </td>
                        <td>
                            {#if transfer.kind === 'withdrawal' && transfer.status === 'pending_user_transfer_start'}
                                Start a Payment
                            {:else}
                                Nevermind
                            {/if}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/await}
</div>
