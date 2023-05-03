import * as server from '../entries/pages/dashboard/send/_page.server.js'

export const index = 9
export const component = async () =>
    (await import('../entries/pages/dashboard/send/_page.svelte.js')).default
export { server }
export const server_id = 'src/routes/dashboard/send/+page.server.js'
export const imports = [
    '_app/immutable/entry/dashboard-send-page.svelte.e7a6d157.js',
    '_app/immutable/chunks/index.9fb5b323.js',
    '_app/immutable/chunks/forms.04a59a3c.js',
    '_app/immutable/chunks/parse.d12b0d5b.js',
    '_app/immutable/chunks/singletons.b7ad8e8e.js',
    '_app/immutable/chunks/index.300902f1.js',
    '_app/immutable/chunks/paths.9549ada4.js',
    '_app/immutable/chunks/navigation.41aba242.js',
    '_app/immutable/chunks/contactsStore.8a7a0bb4.js',
    '_app/immutable/chunks/localStore.50081e00.js',
    '_app/immutable/chunks/generateKeypair.c6b5dfc9.js',
    '_app/immutable/chunks/index.7121c868.js',
    '_app/immutable/chunks/control.e7f5239e.js',
    '_app/immutable/chunks/walletStore.f68d24fc.js',
    '_app/immutable/chunks/horizonQueries.43912467.js',
]
export const stylesheets = []
export const fonts = []
