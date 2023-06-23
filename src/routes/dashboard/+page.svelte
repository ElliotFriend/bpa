<script>
    import AssetStats from './AssetStats.svelte'
    import RecentPayments from './RecentPayments.svelte'
    import FavoriteContacts from './FavoriteContacts.svelte'
    import TransferHistory from './TransferHistory.svelte'
</script>

<div class="mx-20 my-10">
    <AssetStats />
</div>

<div class="mx-20 my-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
    <RecentPayments />
    <FavoriteContacts />
</div>

<div class="mx-20 my-10">
    <TransferHistory />
</div>
