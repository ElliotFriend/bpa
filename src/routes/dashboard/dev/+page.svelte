<script>
    import { contacts } from '$lib/stores/contactsStore'
    import { generateKeypair } from '$lib/utils/generateKeypair'
    import { fundWithFriendbot, startTransaction } from '$lib/utils/horizonQueries'
    import { fetchAssets } from '$lib/utils/stellarExpert'
    import { addContactTrustlines, mergeFriendbotAccount } from '$lib/utils/devHelpers'
    import { browser } from '$app/environment'
    // import ModalButton from '$lib/components/ModalButton.svelte'
    import { getContext } from 'svelte'
    // console.log('getContext', getContext('simple-modal'))
    // import { modalStore } from '$lib/stores/modalStore'
    // const { open, close } = getContext('simple-modal')
    // import SimpleModal from '$lib/components/SimpleModal.svelte'
    import { modal } from '$lib/stores/modalStore'
    // const { open } = getContext('simple-modal')
    import { walletStore } from '$lib/stores/walletStore.js'

    export let data

    $: numContacts = 1
    $: fundContacts = false
    $: trustlineContacts = false
    $: modalButtonText = 'show modal'

    const addContacts = async () => {
        let assets
        if (trustlineContacts) assets = await fetchAssets()
        let usersRes = await fetch(
            `https://dummyjson.com/users?limit=${numContacts}&skip=${$contacts.length}&select=firstName`
        )
        let { users } = await usersRes.json()
        users.map(async (user) => {
            let kp = generateKeypair()
            contacts.add({
                name: user.firstName,
                address: kp.publicKey(),
                favorite: user.id % 2 === 0,
            })
            if (fundContacts) {
                await fundWithFriendbot(kp.publicKey())
                if (trustlineContacts) {
                    await addContactTrustlines(kp, assets)
                }
            }
        })
    }
</script>

<div class="prose my-10 mx-20">
    <h1 class="text-5xl font-bold">Dev Helpers</h1>
    {#if browser}
        <h2 class="text-3xl font-bold">Keypair Information</h2>
        <p>These can be helpful to know in case you need to manually create some transactions that we aren't setup to do yet.</p>
        <dl>
            <dt><strong>Public Key</strong></dt>
            <dd><code>{$walletStore.publicKey}</code></dd>
            <dt><strong>Secret Key</strong></dt>
            <dd><code>{$walletStore.devInfo.secretKey}</code></dd>
        </dl>
    {/if}
    <h2 class="text-3xl font-bold">Make Friends</h2>
    <p>Populate the contact list, and fund the accounts with friendbot</p>
    <input type="number" id="numContacts" name="numContacts" bind:value={numContacts} />
    <label for="fundContacts" class="cursor-pointer">
        Fund new contacts
        <input
            type="checkbox"
            class="checkbox"
            name="fundContacts"
            id="fundContacts"
            bind:checked={fundContacts}
        />
    </label>
    <label for="trustlineContacts" class="cursor-pointer">
        Give contacts some trustlines
        <input
            type="checkbox"
            class="checkbox"
            name="trustlineContacts"
            id="trustlineContacts"
            bind:checked={trustlineContacts}
        />
    </label>
    <button class="btn btn-primary" on:click={addContacts}>Add Contacts</button>
    <h2 class="text-3xl font-bold">Burn Bridges</h2>
    <p>Delete the contacts list</p>
    <button class="btn btn-error" on:click={contacts.empty}>Empty Contacts</button>
    <h2 class="text-3xl font-bold">Get Rich</h2>
    <p>Get your own account funded by friendbot</p>
    <button class="btn btn-success" on:click={mergeFriendbotAccount($walletStore.publicKey)}
        >I need a friend!</button
    >
    <h2 class="text-3xl font-bold">Launch Modal Rocket</h2>
    <p>Test the modal thing to see what comes up... I guess?</p>
    <input type="text" bind:value={modalButtonText} />
    <!-- <Modal show={$modal}> -->
    <button on:click={open}
        class="btn btn-primary">{modalButtonText}</button>
    <!-- </Modal> -->
    <!-- <label for="my-modal" class="btn btn-primary">open modal</label> -->
    <!-- <ModalButton buttonText={modalButtonText} /> -->
</div>
