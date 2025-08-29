// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow all hosts for Replit environment (dynamic hostnames)
    allowedHosts: 'all',
    host: '0.0.0.0',
    // Your existing proxy settings
    proxy: {
      '/api': 'http://127.0.0.1:5001',
    },
  },
})
