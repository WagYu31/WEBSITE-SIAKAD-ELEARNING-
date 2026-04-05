import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: './',
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://stiabayuanggajobs.online',
        changeOrigin: true,
        secure: true,
      },
      '/uploads': {
        target: 'https://stiabayuanggajobs.online',
        changeOrigin: true,
        secure: true,
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
