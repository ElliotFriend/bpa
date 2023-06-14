<script>
    import { page } from "$app/stores";
    let publicKey = $page.data.publicKey
</script>

<header class="navbar bg-base-300">
    <div class="flex-1">
        <a href="/dashboard" class="btn btn-ghost normal-case text-xl">BasicPay</a>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
            <button tabindex="0" class="btn btn-ghost btn-circle avatar">
                {#if publicKey}
                    <div class="w-10 rounded-full">
                        <img
                            src="https://id.lobstr.co/{publicKey}.png"
                            alt="stellar-account-identicon"
                        />
                    </div>
                {:else}
                    <div class="avatar placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-10">
                            <span class="text-l">G</span>
                        </div>
                    </div>
                {/if}
            </button>
            <ul
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <a href="#" class="justify-between">
                        Profile
                        <span class="badge">New</span>
                    </a>
                </li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    </div>
</header>
