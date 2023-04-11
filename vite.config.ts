import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [tsconfigPaths(), react(), svgr({ exportAsDefault: true })],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  server: {
    proxy: {"/api": { changeOrigin: true, target: "http://localhost:3000", rewrite: (path) => path.replace(/^\/api/, '')}},
    host: '127.0.0.1'
  }
})
