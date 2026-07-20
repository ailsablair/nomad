import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: './client',
  // Using an empty string forces Vite to use true relative paths (e.g., "assets/index.js")
  // This allows the app to load correctly on ANY domain or subfolder automatically.
  base: '', 
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
});
