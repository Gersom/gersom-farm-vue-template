import { defineConfig } from '@farmfe/core';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  compilation: {
    resolve: {
      alias: {
        '@': path.join(process.cwd(), "/"),
        '@src': path.join(process.cwd(), "src"),
        '@assets': path.join(process.cwd(), "src/assets"),
        '@images': path.join(process.cwd(), "src/assets/images"),
        '@components': path.join(process.cwd(), "src/components"),
      },
    },
  },
  vitePlugins: [vue()],
});
