import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/home/*', // Path where your .glb file is stored
          dest: '' // Keeps the same path in the build
        }
      ]
    })
  ],
  server:{
    host:true
  },
  assetsInclude: ['**/*.glb']
});
