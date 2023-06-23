<script>
    import { page } from '$app/stores'
    let publicKey = $page.data.publicKey
</script>

<header class="navbar bg-base-300">
    <div class="flex-1">
        <a href="/dashboard" class="btn-ghost btn text-xl normal-case">BasicPay</a>
    </div>
    <div class="flex-none">
        <div class="dropdown-end dropdown">
            <button tabindex="0" class="btn-ghost btn-circle avatar btn">
                {#if publicKey}
                    <div class="w-10 rounded-full">
                        <img
                            src="https://id.lobstr.co/{publicKey}.png"
                            alt="stellar-account-identicon"
                        />
                    </div>
                {:else}
                    <div class="placeholder avatar">
                        <div class="w-10 rounded-full bg-neutral-focus text-neutral-content">
                            <span class="text-l">G</span>
                        </div>
                    </div>
                {/if}
            </button>
            <ul
                class="menu-compact dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 shadow"
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
