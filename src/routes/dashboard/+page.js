import { browser } from "$app/environment";
import { Keypair } from 'stellar-sdk';

if (browser) {
    console.log("I am running in the browser");
    console.log(Keypair.random());
} else {
    console.log("I am NOT running in the browser");
}
