import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// add vite-react.deploywise.dev 

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'vite-react.deploywise.dev'
  }
 
})
