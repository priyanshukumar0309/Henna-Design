import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react-i18next', 'i18next'],
  },
});
