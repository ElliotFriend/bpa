import * as universal from '../entries/pages/dashboard/_layout.js'

export const index = 2
export const component = async () =>
    (await import('../entries/pages/dashboard/_layout.svelte.js')).default
export { universal }
export const universal_id = 'src/routes/dashboard/+layout.js'
export const imports = [
    '_app/immutable/entry/dashboard-layout.svelte.0cf4b49d.js',
    '_app/immutable/chunks/index.9fb5b323.js',
    '_app/immutable/chunks/modalStore.9b01ff0f.js',
    '_app/immutable/chunks/index.300902f1.js',
    '_app/immutable/entry/dashboard-layout.js.2c9d16e2.js',
    '_app/immutable/chunks/localStore.50081e00.js',
    '_app/immutable/chunks/index.300902f1.js',
    '_app/immutable/chunks/index.9fb5b323.js',
    '_app/immutable/chunks/_layout.61b7921f.js',
]
export const stylesheets = []
export const fonts = []
