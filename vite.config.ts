import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_DEPLOY_TARGET === 'gh-pages' ? '/nomad/' : './',
  root: './client',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      // This forces the build to ignore missing modules instead of crashing
      external: [], 
    }
  },
  server: {
    port: 3000,
  }
})
