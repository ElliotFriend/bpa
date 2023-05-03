import { c as create_ssr_component, g as getContext } from '../../chunks/index3.js'
const PinModal_svelte_svelte_type_style_lang = ''
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    getContext('user')
    return `<div class="hero min-h-screen bg-base-200"><div class="hero-content text-center"><div class="max-w-md"><h1 class="text-5xl font-bold">Welcome to BasicPay!</h1>
            <p class="py-6">The app that lets you pay, <em>basically</em>, anyone.</p>
            <a href="/signup" class="btn btn-primary">Signup Now</a>
            <a href="/dashboard" class="btn">Dashboard</a>
            <a href="#my-modal-2" class="btn">Modal</a></div></div></div>



`
})
export { Page as default }
