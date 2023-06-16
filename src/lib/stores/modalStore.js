import { writable } from 'svelte/store'

export const modalStore = writable({
    title: 'Transaction Preview',
    body: 'Please confirm the transaction below in order to sign and submit it to the network',
    confirmButton: 'Confirm',
    rejectButton: 'Reject',
    confirmingPincode: false,
    txXDR: null,
    errorMessage: null,
    challengeNetwork: null,
})

export const modal = writable(null)
