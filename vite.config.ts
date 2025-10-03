import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/TypeScript/RubikaDatapad/public/php': {
                target: 'http://localhost',
                changeOrigin: true,
                rewrite: path => path,
            },
        },
    },
})