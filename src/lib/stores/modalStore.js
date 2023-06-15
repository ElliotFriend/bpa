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

// export const pinModalStore = writable({
//     title: 'Confirm Pincode',
//     body: 'Please confirm your pincode',
//     // firstPincode: null,
//     // confirmPincode: null,
// })

export const modal = writable(null)

// export const txPreviewModal = () => {
//     modal.set
// }

// export const handleTxPreview = () => {
//     if ($modalStore.txXDR) {
//         // parse xdr
//     }
// }
