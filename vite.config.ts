import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 4096, // Keeps assets small
    rollupOptions: {
      output: {
        manualChunks: undefined, // Prevent excessive chunking
      },
    },
  },
});