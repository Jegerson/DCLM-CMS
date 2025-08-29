// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow dynamic Replit subdomains
    allowedHosts: 'all',
    // Listen on all interfaces so Replit URL can reach it
    host: '0.0.0.0',
    // Use Replit's assigned port or fall back to 5173
    port: process.env.PORT || 5173,
    // Proxy backend API calls
    proxy: {
      '/api': 'http://127.0.0.1:8000',
    },
  },
})

