import preprocess from 'svelte-preprocess'
// import adapter from '@sveltejs/adapter-auto'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            fallback: 'index.html',
        }),
    },
    prerender: false,
    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],
}

export default config
