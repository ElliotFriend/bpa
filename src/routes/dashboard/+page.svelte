<script>
    import AssetStats from './AssetStats.svelte'
    import RecentPayments from './RecentPayments.svelte'
    import FavoriteContacts from './FavoriteContacts.svelte'
    import TransferHistory from './TransferHistory.svelte'
</script>

<div class="my-10 mx-20">
    <AssetStats />
</div>

<div class="my-10 mx-20 grid grid-cols-1 xl:grid-cols-2 gap-10">
    <RecentPayments />
    <FavoriteContacts />
</div>

<div class="my-10 mx-20">
    <TransferHistory />
</div>
