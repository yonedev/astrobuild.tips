import { defineConfig } from 'astro/config'
import yaml from '@rollup/plugin-yaml'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import preact from '@astrojs/preact'
import vue from '@astrojs/vue'
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://localhost:3000',
  compressHTML: true,
  vite: {
    plugins: [yaml()]
  },
  integrations: [
    tailwind({
      applyBaseStyles: true
    }),
    mdx(),
    react(),
    preact(),
    vue(),
    svelte(),
    sitemap()
  ]
})
