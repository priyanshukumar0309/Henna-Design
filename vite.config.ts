import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
          'framer-motion': ['framer-motion'],
          'i18n': ['react-i18next', 'i18next'],
          'icons': ['lucide-react'],
          'utils': ['react-intersection-observer'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 600,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react-i18next', 'i18next'],
  },
});
