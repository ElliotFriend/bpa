import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'
import resolve from 'rollup-plugin-node-resolve'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            polyfill: true,
        }),
    },

    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],
    plugins: [
        resolve({
            dedupe: ['svelte', 'svelte/transition', 'svelte/internal'], // important!
        }),
    ],
}

export default config
