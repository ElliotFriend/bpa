import { browser } from "$app/environment"
import { Buffer } from "buffer"
import { fetch as fetchPolyfill } from 'whatwg-fetch'

if (browser) {
    window.Buffer = Buffer
} else {
    globalThis.Buffer = Buffer
    // globalThis.fetch = fetchPolyfill
    globalThis.window = {
        fetch: fetchPolyfill
    }
}

export default globalThis
