import { persisted } from "svelte-local-storage-store"

function createWebAuthStore() {
    const { subscribe, set, update } = persisted('bpa:webAuthStore', {})

    return {
        subscribe,

        setAuth: (homeDomain, token) =>
            update((store) => {
                return {
                    ...store,
                    [homeDomain]: token
                }
            })
    }
}
export const webAuthStore = createWebAuthStore()
