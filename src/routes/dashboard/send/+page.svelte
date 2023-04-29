<script>
    import { browser } from '$app/environment'
    import { contacts } from '$lib/stores/contactsStore'
    import { getSourcePublicKey } from '$lib/utils/walletStore'
    let sourcePublicKey
    if (browser) {
        sourcePublicKey = getSourcePublicKey().bpaPublicKey
    }
</script>


<h1>Send a Payment</h1>
<p>This is where you'll be able to send a payment</p>

<form method="POST" action="?/preview">
    <input type="hidden" id="source" name="source" value={sourcePublicKey} />
    <div class="form-control w-full max-w-xs">
        <label for="destination" class="label">
            <span class="label-text">Destination</span>
        </label>
        <select id="destination" name="destination" class="select select-bordered">
            <option disabled selected>Select Recipient</option>
            {#if contacts}
                {#each $contacts as contact}
                    <option value={contact.address}>{contact.name}</option>
                {/each}
            {/if}
        </select>
    </div>
    <div class="form-control">
        <label for="amount" class="label">
            <span class="label-text">Amount</span>
        </label>
        <label class="input-group">
            <input id="amount" name="amount" type="text" placeholder="0.01" class="input input-bordered" />
            <span>XLM</span>
        </label>
    </div>
    <div class="form-control">
        <label for="memo" class="label">
            <span class="label-text">Memo</span>
        </label>
        <input id="memo" name="memo" type="text" placeholder="Optional" class="input input-bordered" />
    </div>
    <div class="form-control">
        <button type="submit" class="btn btn-primary">Preview</button>
    </div>
</form>
