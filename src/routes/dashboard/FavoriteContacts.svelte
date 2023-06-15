<script>
    import { contacts } from '$lib/stores/contactsStore'
    import TruncatedPublicKey from '$lib/components/TruncatedPublicKey.svelte';

    // console.log($contacts)
    $: favoriteContacts = $contacts?.filter((contact) => contact.favorite)
</script>

<div class="overflow-x-auto">
    <div class="prose mb-1">
        <h3>Favorite Contacts</h3>
    </div>
    <table class="table w-full">
        <!-- head -->
        <thead>
            <tr>
                <th>Favorite</th>
                <th>Name</th>
                <th>Address</th>
                <th />
            </tr>
        </thead>
        <!-- row 1 -->
        {#if favoriteContacts}
            <tbody>
                {#each favoriteContacts as contact (contact.id)}
                    <tr>
                        <th>
                            <label>
                                <input
                                    type="checkbox"
                                    class="checkbox checkbox-success"
                                    checked={contact.favorite}
                                    on:click={contacts.favorite(contact.id)}
                                />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img
                                            src="https://id.lobstr.co/{contact.address}.png"
                                            alt="Avatar Tailwind CSS Component"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">{contact.name}</div>
                                </div>
                            </div>
                        </td>
                        <td><TruncatedPublicKey publicKey={contact.address} /></td>
                        <th>
                            <button class="btn btn-ghost btn-xs">Stellar.Expert</button>
                        </th>
                    </tr>
                {/each}
            </tbody>
        {/if}
        <!-- foot -->
    </table>
</div>
