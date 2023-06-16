import { persisted } from "svelte-local-storage-store"

export const webAuthStore = persisted('bpa:webAuthStore', {})
