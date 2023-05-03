import {
    c as create_ssr_component,
    a as subscribe,
    d as add_attribute,
} from '../../../../chunks/index3.js'
import 'stellar-sdk'
import '../../../../chunks/index.js'
import '../../../../chunks/horizonQueries.js'
import { m as modalStore } from '../../../../chunks/modalStore.js'
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let numContacts
    let fundContacts
    let trustlineContacts
    let $modalStore, $$unsubscribe_modalStore
    $$unsubscribe_modalStore = subscribe(modalStore, (value) => ($modalStore = value))
    let { data } = $$props
    if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data)
    numContacts = 1
    fundContacts = false
    trustlineContacts = false
    $$unsubscribe_modalStore()
    return `<div class="my-10 mx-20"><h1 class="text-5xl font-bold">Dev Helpers</h1>
    <h2 class="text-3xl font-bold">Make Friends</h2>
    <p>Populate the contact list, and fund the accounts with friendbot</p>
    <input type="number" id="numContacts" name="numContacts"${add_attribute(
        'value',
        numContacts,
        0
    )}>
    <label for="fundContacts" class="cursor-pointer">Fund new contacts
        <input type="checkbox" class="checkbox" name="fundContacts" id="fundContacts"${add_attribute(
            'checked',
            fundContacts,
            1
        )}></label>
    <label for="trustlineContacts" class="cursor-pointer">Give contacts some trustlines
        <input type="checkbox" class="checkbox" name="trustlineContacts" id="trustlineContacts"${add_attribute(
            'checked',
            trustlineContacts,
            1
        )}></label>
    <button class="btn btn-primary">Add Contacts</button>
    <h2 class="text-3xl font-bold">Burn Bridges</h2>
    <p>Delete the contacts list</p>
    <button class="btn btn-error">Empty Contacts</button>
    <h2 class="text-3xl font-bold">Get Rich</h2>
    <p>Get your own account funded by friendbot</p>
    <button class="btn btn-success">I need a friend!</button>
    <h2 class="text-3xl font-bold">Launch Model Rocket</h2>
    <p>Test the modal thing to see what comes up... I guess?</p>
    <input type="text"${add_attribute('value', $modalStore.button, 0)}>
    <label for="my-modal" class="btn btn-primary">open modal</label></div>`
})
export { Page as default }
