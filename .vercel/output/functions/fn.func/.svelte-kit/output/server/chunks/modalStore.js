import { w as writable } from './index2.js'
let modalStore = writable({
    title: 'Congratulations random Internet user!',
    body: "You've been selected for a chance to get one year of subscription to use Wikipedia for free!",
    button: 'Yay!',
})
export { modalStore as m }
