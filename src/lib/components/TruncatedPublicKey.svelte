<script>
    export let publicKey
</script>

<span alt={publicKey}>
    {publicKey.slice(0, 4)}...{publicKey.slice(-4)}
</span>
