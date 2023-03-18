<div class="navbar bg-base-300">
    <div class="flex-none lg:hidden">
        <label for="menu-drawer" class="btn btn-square btn-ghost">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                /></svg
            >
        </label>
    </div>
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">BasicPay</a>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img
                        src="https://id.lobstr.co/GCGY2BFEKRCFIIEKARTPJE7UILIEOCHV5UX32HE6LRK3RXIBLEMS44FC.png"
                    />
                </div>
            </label>
            <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <a class="justify-between">
                        Profile
                        <span class="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    </div>
</div>

<div class="drawer drawer-mobile">
    <input id="menu-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
        <slot />
    </div>
    <div class="drawer-side">
        <label for="menu-drawer" class="drawer-overlay" />
        <ul class="menu p-4 w-80 bg-base-200 text-base-content">
            <!-- Sidebar content here -->
            <li><a>Send a Payment</a></li>
            <li><a>Manage Assets</a></li>
            <li><a>Manage Contacts</a></li>
            <li><a>Deposits and Withdrawals</a></li>
        </ul>
    </div>
</div>
