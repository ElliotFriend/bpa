// import { writable } from "svelte/store"
import { browser } from '$app/environment'
import { localStore } from './localStore'
import { v4 as uuidv4 } from 'uuid'
import { validPublicKey } from '$lib/utils/generateKeypair'
import { error } from '@sveltejs/kit'

function createContacts() {
    if (browser) {
        const { subscribe, set, update } = localStore('bpa:contactList', [])

        return {
            subscribe,
            
            empty: () => set([]),

            remove: (id) => update((list) => 
                list.filter((contact) => contact.id !== id)),
            
            add: (contact) => update((list) => {
                if (validPublicKey(contact.address)) {
                    return [...list, {id: uuidv4(), ...contact}]
                } else {
                    throw error(400, "invalid public key")
                }
            }),

            favorite: (id) => update((list) => {
                const i = list.findIndex((contact) => contact.id === id)
                if (i >= 0) list[i].favorite = !list[i].favorite
                return list
            }),
        }
    }
}

export const contacts = createContacts()
