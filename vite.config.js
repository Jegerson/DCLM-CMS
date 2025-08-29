// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Add this to allow the Replit host
    allowedHosts: [
      'fc666cb4-8a7c-4a2e-ada0-d5cfb72f5fa8-00-3f9zhd5okic82.janeway.replit.dev'
    ],
    // Your existing proxy settings
    proxy: {
      '/api': 'http://127.0.0.1:5001',
    },
  },
})
