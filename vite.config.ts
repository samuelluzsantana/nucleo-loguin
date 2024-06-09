import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url' // Using fileURLToPath
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const __dirname = path.dirname(fileURLToPath(import.meta.url)) // Define __dirname using import.meta.url

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/config/web.config',
          dest: '',
        },
      ],
    }),
  ],
})
