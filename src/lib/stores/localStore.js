import { writable } from 'svelte/store'

// a type of store that abstracts the creation of a writable store, and mirrors
// that writable store into localStorage
export const localStore = (key, initial) => {
    if (storageAvailable('localStorage')) {
        const existing = localStorage.getItem(key)
        const data = existing ? JSON.parse(existing) : initial

        const store = writable(data, () => {
            const unsubscribe = store.subscribe((value) => {
                localStorage.setItem(key, JSON.stringify(value))
            })
            return unsubscribe
        })
        return store
    }
}

export function storageAvailable(type) {
    let storage
    try {
        storage = window[type]
        const x = '__storage_test__'
        storage.setItem(x, x)
        storage.removeItem(x)
        return true
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        )
    }
}
