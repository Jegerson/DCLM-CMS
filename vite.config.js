import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:5001',
    },
    // Add the specific host to the allowed hosts list
    allowedHosts: [
      'fc666cb4-8a7c-4a2e-ada0-d5cfb72f5fa8-00-3f9zhd5okic82.janeway.replit.dev',
    ],
  },
})
