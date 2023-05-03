import {
    g as getContext,
    c as create_ssr_component,
    a as subscribe,
    e as escape,
} from '../../chunks/index3.js'
const getStores = () => {
    const stores = getContext('__svelte__')
    return {
        page: {
            subscribe: stores.page.subscribe,
        },
        navigating: {
            subscribe: stores.navigating.subscribe,
        },
        updated: stores.updated,
    }
}
const page = {
    /** @param {(value: any) => void} fn */
    subscribe(fn) {
        const store = getStores().page
        return store.subscribe(fn)
    },
}
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let $page, $$unsubscribe_page
    $$unsubscribe_page = subscribe(page, (value) => ($page = value))
    $$unsubscribe_page()
    return `<div class="prose mx-auto my-10"><h1>Oops!</h1>
    <p>Looks like an error has occurred. The error message received was:</p>
    <pre><code>${escape($page.error.message)}</code></pre></div>`
})
export { Error$1 as default }
