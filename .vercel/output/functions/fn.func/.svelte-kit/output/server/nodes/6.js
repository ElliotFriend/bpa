import * as universal from '../entries/pages/dashboard/assets/_page.js'
import * as server from '../entries/pages/dashboard/assets/_page.server.js'

export const index = 6
export const component = async () =>
    (await import('../entries/pages/dashboard/assets/_page.svelte.js')).default
export { universal }
export const universal_id = 'src/routes/dashboard/assets/+page.js'
export { server }
export const server_id = 'src/routes/dashboard/assets/+page.server.js'
export const imports = [
    '_app/immutable/entry/dashboard-assets-page.svelte.eb4558bb.js',
    '_app/immutable/chunks/index.9fb5b323.js',
    '_app/immutable/chunks/horizonQueries.43912467.js',
    '_app/immutable/chunks/index.7121c868.js',
    '_app/immutable/chunks/control.e7f5239e.js',
    '_app/immutable/chunks/generateKeypair.c6b5dfc9.js',
    '_app/immutable/chunks/forms.04a59a3c.js',
    '_app/immutable/chunks/parse.d12b0d5b.js',
    '_app/immutable/chunks/singletons.b7ad8e8e.js',
    '_app/immutable/chunks/index.300902f1.js',
    '_app/immutable/chunks/paths.9549ada4.js',
    '_app/immutable/chunks/navigation.41aba242.js',
    '_app/immutable/entry/dashboard-assets-page.js.4c403dd6.js',
    '_app/immutable/chunks/horizonQueries.43912467.js',
    '_app/immutable/chunks/index.7121c868.js',
    '_app/immutable/chunks/control.e7f5239e.js',
    '_app/immutable/chunks/generateKeypair.c6b5dfc9.js',
    '_app/immutable/chunks/paths.9549ada4.js',
    '_app/immutable/chunks/_page.b92d5427.js',
]
export const stylesheets = []
export const fonts = []
