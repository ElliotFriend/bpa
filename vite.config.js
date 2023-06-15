import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

export default defineConfig({
    plugins: [sveltekit()],
    resolve: {
        alias: {
            buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            define: {
                global: 'globalThis',
            },
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    buffer: true,
                }),
            ],
        },
    },
    build: {
        rollupOptions: {
            plugins: [
                rollupNodePolyFill(),
            ],
        },
    },
    ssr: {
        noExternal: ['@stellar/wallet-sdk'],
    },
})
