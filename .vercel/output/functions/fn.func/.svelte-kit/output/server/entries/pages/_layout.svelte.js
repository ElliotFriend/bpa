import { c as create_ssr_component, s as setContext } from '../../chunks/index3.js'
import { w as writable } from '../../chunks/index2.js'
const app = ''
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { data } = $$props
    const user = writable()
    setContext('user')
    if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data)
    {
        user.set(data.user)
    }
    return `${slots.default ? slots.default({}) : ``}`
})
export { Layout as default }
