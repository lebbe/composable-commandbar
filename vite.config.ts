import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdPlugin, { Mode } from 'vite-plugin-markdown'

export default defineConfig({
  plugins: [mdPlugin({ mode: [Mode.HTML] }), react()],
  base: '/composable-commandbar/',
  build: {
    outDir: './docs',
  },
})
