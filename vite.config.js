import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],

  build: {
    // Target modern browsers — smaller output, no legacy polyfills
    target: 'es2020',

    // Split CSS into separate files per chunk for faster parallel loading
    cssCodeSplit: true,

    // Raise chunk-size warning threshold (our banner images are large, not JS)
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        // Manual chunk strategy: split vendor libs into separate cached bundles.
        // These rarely change → long-lived browser cache; only app code re-downloads on deploy.
        manualChunks(id) {
          // Framer Motion — large animation library, cache separately
          if (id.includes('framer-motion')) return 'vendor-motion';

          // Swiper — carousel library
          if (id.includes('swiper')) return 'vendor-swiper';

          // React + React DOM core
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) return 'vendor-react';

          // React Router
          if (id.includes('react-router')) return 'vendor-router';

          // All other node_modules grouped as shared vendor
          if (id.includes('node_modules')) return 'vendor-misc';
        },

        // Named chunk files for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})

