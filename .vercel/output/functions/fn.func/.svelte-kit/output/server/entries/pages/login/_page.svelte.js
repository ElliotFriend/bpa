import {
    c as create_ssr_component,
    a as subscribe,
    d as add_attribute,
    e as escape,
} from '../../../chunks/index3.js'
import '../../../chunks/index.js'
import { w as writable } from '../../../chunks/index2.js'
import '../../../chunks/WithdrawProvider.js'
import 'stellar-sdk'
import 'lodash/debounce.js'
import 'bignumber.js'
import 'lodash/flatten.js'
import 'query-string'
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let $pincode, $$unsubscribe_pincode
    let $errorMessage, $$unsubscribe_errorMessage
    let { data } = $$props
    console.log(data)
    let pincode = writable()
    $$unsubscribe_pincode = subscribe(pincode, (value) => ($pincode = value))
    let errorMessage = writable()
    $$unsubscribe_errorMessage = subscribe(errorMessage, (value) => ($errorMessage = value))
    if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data)
    $$unsubscribe_pincode()
    $$unsubscribe_errorMessage()
    return `<div class="hero min-h-screen bg-base-200"><div class="hero-content flex-col lg:flex-row-reverse"><div class="text-center lg:text-left">${
        $errorMessage
            ? `<div class="alert alert-error shadow-lg mb-4"><div><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Error: ${escape($errorMessage)}</span></div></div>`
            : ``
    }
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"><div class="card-body"><h1 class="text-5xl font-bold">Login</h1>
                    <div class="form-control"><label for="publicKey" class="label"><span class="label-text">Public Key</span></label>
                        <input type="text" placeholder="G..." id="publicKey" class="input input-bordered" disabled${add_attribute(
                            'value',
                            data.bpaPublicKey,
                            0
                        )}></div>
                    <div class="form-control"><label for="pincode" class="label"><span class="label-text">Pincode</span></label>
                        <input type="number" id="pincode" class="input input-bordered"${add_attribute(
                            'value',
                            $pincode,
                            0
                        )}></div>
                    <div class="form-control mt-6"><button class="btn btn-primary">Login</button></div></div></div></div></div></div>`
})
export { Page as default }
