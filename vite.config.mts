// vite.config.ts
import { defineConfig } from 'vite';


export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'gg-db-sqlite',
      fileName: (format) => `gg-db-sqlite.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      output: {
        globals: {},
      },
    },
  },
});
