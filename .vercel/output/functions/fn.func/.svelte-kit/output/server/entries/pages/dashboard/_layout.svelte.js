import {
    c as create_ssr_component,
    e as escape,
    a as subscribe,
    v as validate_component,
} from '../../../chunks/index3.js'
import { m as modalStore } from '../../../chunks/modalStore.js'
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { bpaPublicKey } = $$props
    if ($$props.bpaPublicKey === void 0 && $$bindings.bpaPublicKey && bpaPublicKey !== void 0)
        $$bindings.bpaPublicKey(bpaPublicKey)
    return `<header class="navbar bg-base-300"><div class="flex-1"><a href="/dashboard" class="btn btn-ghost normal-case text-xl">BasicPay</a></div>
    <div class="flex-none"><div class="dropdown dropdown-end"><button tabindex="0" class="btn btn-ghost btn-circle avatar">${
        bpaPublicKey
            ? `<div class="w-10 rounded-full"><img src="${
                  'https://id.lobstr.co/' + escape(bpaPublicKey, true) + '.png'
              }" alt="stellar-account-identicon"></div>`
            : `<div class="avatar placeholder"><div class="bg-neutral-focus text-neutral-content rounded-full w-10"><span class="text-l">G</span></div></div>`
    }</button>
            <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><li><a href="#" class="justify-between">Profile
                        <span class="badge">New</span></a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Logout</a></li></ul></div></div></header>`
})
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `<ul class="menu p-4 w-80 bg-base-200 text-base-content">
    <li><a href="/dashboard/send">Send Payments</a></li>
    <li><a href="/dashboard/assets">Manage Assets</a></li>
    <li><a href="/dashboard/contacts">Manage Contacts</a></li>
    <li><a href="#">Deposits and Withdrawals</a></li>
    <li><a href="/dashboard/dev">Dev Helpers</a></li></ul>`
})
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `<footer class="footer footer-center p-4 bg-base-300 text-base-content"><div><p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p></div></footer>`
})
const TxPreviewModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let $modalStore, $$unsubscribe_modalStore
    $$unsubscribe_modalStore = subscribe(modalStore, (value) => ($modalStore = value))
    console.log('Hi, there! Greetings from TXPreviewModal.svelte')
    $$unsubscribe_modalStore()
    return `
<input type="checkbox" id="my-modal" class="modal-toggle">
<div class="modal"><div class="modal-box"><h3 class="font-bold text-lg">${escape(
        $modalStore.title
    )}</h3>
    <p class="py-4">${escape($modalStore.body)}</p>
    <div class="modal-action"><label for="my-modal" class="btn">${escape(
        $modalStore.button
    )}</label></div></div></div>`
})
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { data } = $$props
    let bpaPublicKey = data.bpaPublicKey
    if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data)
    return `<div class="flex flex-col">${validate_component(Navbar, 'Navbar').$$render(
        $$result,
        { bpaPublicKey },
        {},
        {}
    )}

    <div class="flex flex-row">${validate_component(Sidebar, 'Sidebar').$$render(
        $$result,
        {},
        {},
        {}
    )}
        <main class="flex-1 overflow-y-auto">${slots.default ? slots.default({}) : ``}</main></div>

    ${validate_component(Footer, 'Footer').$$render($$result, {}, {}, {})}</div>

${validate_component(TxPreviewModal, 'TxPreviewModal').$$render($$result, {}, {}, {})}`
})
export { Layout as default }
