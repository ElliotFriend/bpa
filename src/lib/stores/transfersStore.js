import { persisted } from 'svelte-local-storage-store'

function createTransfersStore() {
    const { subscribe, set, update } = persisted('bpa:transfersStore', {})

    return {
        subscribe,

        add: (homeDomain, transferDetails) =>
            update((store) => {
                if (store && homeDomain in store) {
                    return {
                        ...store,
                        [homeDomain]: [...store[homeDomain], transferDetails]
                    }
                } else {
                    return {
                        ...store,
                        [homeDomain]: [transferDetails]
                    }
                }
            })
    }
}

export const transfers = createTransfersStore()
