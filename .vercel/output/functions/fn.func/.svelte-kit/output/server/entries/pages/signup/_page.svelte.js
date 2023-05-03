import {
    c as create_ssr_component,
    a as subscribe,
    d as add_attribute,
} from '../../../chunks/index3.js'
import { w as writable } from '../../../chunks/index2.js'
import '../../../chunks/WithdrawProvider.js'
import 'stellar-sdk'
import 'lodash/debounce.js'
import 'bignumber.js'
import 'lodash/flatten.js'
import 'query-string'
import '../../../chunks/index.js'
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let $confirmPincode, $$unsubscribe_confirmPincode
    let $pincode, $$unsubscribe_pincode
    let $secretKey, $$unsubscribe_secretKey
    let $publicKey, $$unsubscribe_publicKey
    let $$unsubscribe_keypair
    let $errorMessage, $$unsubscribe_errorMessage
    let $showSecret, $$unsubscribe_showSecret
    let keypair = writable()
    $$unsubscribe_keypair = subscribe(keypair, (value) => value)
    let publicKey = writable()
    $$unsubscribe_publicKey = subscribe(publicKey, (value) => ($publicKey = value))
    let secretKey = writable()
    $$unsubscribe_secretKey = subscribe(secretKey, (value) => ($secretKey = value))
    let showSecret = writable(false)
    $$unsubscribe_showSecret = subscribe(showSecret, (value) => ($showSecret = value))
    let pincode = writable()
    $$unsubscribe_pincode = subscribe(pincode, (value) => ($pincode = value))
    let confirmPincode = writable()
    $$unsubscribe_confirmPincode = subscribe(confirmPincode, (value) => ($confirmPincode = value))
    let errorMessage = writable()
    $$unsubscribe_errorMessage = subscribe(errorMessage, (value) => ($errorMessage = value))
    $$unsubscribe_confirmPincode()
    $$unsubscribe_pincode()
    $$unsubscribe_secretKey()
    $$unsubscribe_publicKey()
    $$unsubscribe_keypair()
    $$unsubscribe_errorMessage()
    $$unsubscribe_showSecret()
    return `<div class="hero min-h-screen bg-base-200"><div class="hero-content flex-col lg:flex-row-reverse"><div class="text-center lg:text-left"><h1 class="text-5xl font-bold">Signup now!</h1>
            <p class="py-6">Please provide a 6-digit pincode to sign up. This pincode will be used to encrypt the secret key for your Stellar address, before it is stored in your browser&#39;s local storage. Your secret key to this address will be stored on your device. You will be the only one to ever have custody over this key.</p></div>
        <div class="flex-col">${
            $errorMessage
                ? `<div class="alert alert-error shadow-lg mb-4"><div><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Error: <!-- HTML_TAG_START -->${$errorMessage}<!-- HTML_TAG_END --></span></div></div>`
                : ``
        }
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"><div class="card-body"><div class="form-control"><label for="publicKey" class="label"><span class="label-text">Public Key</span></label>
                        <input type="text" placeholder="G..." id="publicKey" class="input input-bordered" disabled${add_attribute(
                            'value',
                            $publicKey,
                            0
                        )}>
                        <label class="label"><button class="label-text-alt link link-hover">Generate new address?</button></label></div>
                    <div class="form-control"><label class="label cursor-pointer pb-0"><span class="label-text">Show secret key?</span>
                            <input type="checkbox" class="toggle"${add_attribute(
                                'checked',
                                $showSecret,
                                1
                            )}></label></div>
                    ${
                        $showSecret
                            ? `<div class="form-control"><label for="secretKey" class="label"><span class="label-text">Secret Key</span></label>
                            <input type="text" placeholder="S..." id="secretKey" class="input input-bordered" disabled${add_attribute(
                                'value',
                                $secretKey,
                                0
                            )}></div>`
                            : ``
                    }
                    <div class="form-control"><label for="pincode" class="label"><span class="label-text">Pincode</span></label>
                        <input type="number" id="pincode" class="input input-bordered"${add_attribute(
                            'value',
                            $pincode,
                            0
                        )}></div>
                    <div class="form-control"><label for="confirmPincode" class="label"><span class="label-text">Confirm Pincode</span></label>
                        <input type="number" id="confirmPincode" class="input input-bordered"${add_attribute(
                            'value',
                            $confirmPincode,
                            0
                        )}></div>
                    <div class="form-control mt-6"><button class="btn btn-primary">Signup</button></div>
                    <div class="form-control"><label class="label"><a class="label-text-alt link link-hover" href="/login">Existing users can login here</a></label></div></div></div></div></div></div>`
})
export { Page as default }
