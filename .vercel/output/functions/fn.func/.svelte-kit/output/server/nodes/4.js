import * as server from '../entries/pages/about/_page.server.js'

export const index = 4
export const component = async () =>
    (await import('../entries/pages/about/_page.svelte.js')).default
export { server }
export const server_id = 'src/routes/about/+page.server.js'
export const imports = [
    '_app/immutable/entry/about-page.svelte.ad2deda9.js',
    '_app/immutable/chunks/index.9fb5b323.js',
]
export const stylesheets = []
export const fonts = []
