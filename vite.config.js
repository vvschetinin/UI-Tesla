import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";
import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        enter: path.resolve(__dirname, 'index.html'),
        main: path.resolve(__dirname, 'pages/main/index.html'),
        test: path.resolve(__dirname, 'pages/testing/index.html')
      },
    },
  },
  plugins: [
    vue(),
    pluginPurgeCss(),
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
        png: imageminPngquant()
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        autoprefixer,
      ],
    },
  },
})
