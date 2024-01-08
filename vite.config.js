import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/*export default defineConfig({
  server: {
    proxy: {
      "/frutas": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  plugins: [react()],
})*/


export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const config = {
    plugins: [react()],
    server: {
      proxy: {
        '/frutas': {
          target: 'https://nubitamix.vercel.app',
          changeOrigin: true,
          secure: false,
          //rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
  return defineConfig(config);
};
