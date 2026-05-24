import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import { resolve } from 'path';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: new URLSearchParams([
        ['format', 'avif;webp;jpg'],
        ['w', '400;800;1200;1600'],
        ['quality', '80'],
        ['fit', 'cover'],
      ]),
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false,
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true,
    },
    minify: 'esbuild',
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor';
          }
          if (id.includes('node_modules/react-router-dom')) {
            return 'router';
          }
          if (id.includes('node_modules/react-hook-form') ||
              id.includes('node_modules/@hookform') ||
              id.includes('node_modules/zod')) {
            return 'form';
          }
          if (id.includes('node_modules/clsx') ||
              id.includes('node_modules/tailwind-merge')) {
            return 'utils';
          }
        },
      },
    },
  },
});
