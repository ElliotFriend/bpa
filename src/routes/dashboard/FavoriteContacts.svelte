<script>
    import { contacts } from '$lib/stores/contactsStore';

    // console.log($contacts)
    $: favoriteContacts = $contacts?.filter(contact => contact.favorite)
</script>

<div class="overflow-x-auto">
    <div class="prose mb-1">
        <h3>Favorite Contacts</h3>
    </div>
    <table class="table w-full">
        <!-- head -->
        <thead>
        <tr>
            <th>
            <label>
                <input type="checkbox" class="checkbox" />
            </label>
            </th>
            <th>Name</th>
            <th>Address</th>
            <th></th>
        </tr>
        </thead>
        <!-- row 1 -->
        {#if favoriteContacts}
            <tbody>
            {#each favoriteContacts as contact}
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </th>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <img src="https://id.lobstr.co/GCS2GDGYV3GCWMX5RJIMKCSHKSE6FRXGTY4EGQ45UUAG7QXXNWUJC3BJ.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div class="font-bold">{contact.name}</div>
                            </div>
                        </div>
                    </td>
                    <td>{contact.address}</td>
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
