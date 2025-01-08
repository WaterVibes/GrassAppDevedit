import { defineConfig } from 'vite';
import { resolve } from 'path';

function noHashPlugin() {
  return {
    name: 'no-hash',
    enforce: 'post',
    writeBundle(options, bundle) {
      const fs = require('fs');
      const path = require('path');
      
      const assetsDir = path.join(__dirname, 'dist', 'assets');
      
      // Find and rename files
      fs.readdirSync(assetsDir).forEach(file => {
        const filePath = path.join(assetsDir, file);
        
        if (file.includes('Logo-')) {
          fs.copyFileSync(filePath, path.join(assetsDir, 'Logo.png'));
        } else if (file.includes('main-') && file.endsWith('.css')) {
          fs.copyFileSync(filePath, path.join(assetsDir, 'style.css'));
        } else if (file.includes('main-') && file.endsWith('.js')) {
          fs.copyFileSync(filePath, path.join(assetsDir, 'main.js'));
        }
      });
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
      }
    },
    copyPublicDir: true
  },
  resolve: {
    alias: {
      'three': 'three',
      '@tweenjs/tween.js': '@tweenjs/tween.js'
    }
  },
  publicDir: 'public',
  server: {
    watch: {
      usePolling: true
    },
    fs: {
      strict: false,
      allow: ['..']
    }
  },
  plugins: [noHashPlugin()]
}); 