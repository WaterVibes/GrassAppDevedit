import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

function copyPublicAssets() {
  return {
    name: 'copy-public-assets',
    writeBundle() {
      // Ensure assets directory exists
      if (!fs.existsSync('dist/assets')) {
        fs.mkdirSync('dist/assets', { recursive: true });
      }
      
      // Copy Logo.png
      fs.copyFileSync('public/img/Logo.png', 'dist/assets/Logo.png');
    }
  };
}

export default defineConfig({
  base: '/GrassAppDevedit/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          
          if (assetInfo.name.includes('Logo')) {
            return 'assets/Logo.png';
          }
          if (ext === 'css') {
            return 'assets/style.css';
          }
          if (ext === 'js') {
            return 'assets/[name].js';
          }
          return `assets/[name].[ext]`;
        }
      }
    }
  },
  resolve: {
    alias: {
      'three': 'three',
      '@tweenjs/tween.js': '@tweenjs/tween.js'
    }
  },
  plugins: [copyPublicAssets()]
}); 