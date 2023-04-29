import { Server } from "stellar-sdk";

const server = new Server('https://horizon-testnet.stellar.org');

export async function fetchAccount(publicKey) {
    let res = await server.accounts().accountId(publicKey).call()
    
    return {
        account: res
    }
}