<script>
    import { contacts } from '$lib/stores/contactsStore'
    import { writable } from 'svelte/store'
    import { generateKeypair } from '$lib/utils/generateKeypair'
    import { fundWithFriendbot, startTransaction } from '$lib/utils/horizonQueries'
    import { fetchAssets } from '$lib/utils/stellarExpert'
    import { addContactTrustlines } from '$lib/utils/devHelpers'
    import { modalStore } from '$lib/stores/modalStore'

    export let data

    $: numContacts = 1
    $: fundContacts = false
    $: trustlineContacts = false
    
    const addContacts = async () => {
        let assets
        if (trustlineContacts)
            assets = await fetchAssets()
        let usersRes = await fetch(`https://dummyjson.com/users?limit=${numContacts}&select=firstName`)
        let { users } = await usersRes.json()
        users.map(async (user) => {
            let kp = generateKeypair()
            contacts.add({
                name: user.firstName,
                address: kp.publicKey(),
                favorite: user.id % 2 === 0
            })
            if (fundContacts)
                await fundWithFriendbot(kp.publicKey())
            if (trustlineContacts) 
                await addContactTrustlines(kp, assets)
        })
    }
</script>

<div class="my-10 mx-20">
    <h1 class="text-5xl font-bold">Dev Helpers</h1>
    <h2 class="text-3xl font-bold">Make Friends</h2>
    <p>Populate the contact list, and fund the accounts with friendbot</p>
    <input type="number" id="numContacts" name="numContacts" bind:value={numContacts} />
    <label for="fundContacts" class="cursor-pointer">
        Fund new contacts
        <input type="checkbox" class="checkbox" name="fundContacts" id="fundContacts" bind:checked={fundContacts} />
    </label>
    <label for="trustlineContacts" class="cursor-pointer">
        Give contacts some trustlines
        <input type="checkbox" class="checkbox" name="trustlineContacts" id="trustlineContacts" bind:checked={trustlineContacts} />
    </label>
    <button class="btn btn-primary" on:click={addContacts}>Add Contacts</button>
    <h2 class="text-3xl font-bold">Burn Bridges</h2>
    <p>Delete the contacts list</p>
    <button class="btn btn-error" on:click={contacts.empty}>Empty Contacts</button>
    <h2 class="text-3xl font-bold">Get Rich</h2>
    <p>Get your own account funded by friendbot</p>
    <button class="btn btn-success" on:click={fundWithFriendbot(data.bpaPublicKey)}>I need a friend!</button>
    <h2 class="text-3xl font-bold">Launch Model Rocket</h2>
    <p>Test the modal thing to see what comes up... I guess?</p>
    <input type="text" bind:value={$modalStore.button} />
    <label for="my-modal" class="btn btn-primary">open modal</label>
</div>
