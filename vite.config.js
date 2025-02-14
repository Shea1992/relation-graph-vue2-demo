import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
   base: './',
  console.log('Vite run:', command);
  return {
    plugins: [
      createVuePlugin(),
       vue()
    ].filter(Boolean),
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  };
});
