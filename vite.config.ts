import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
// tailwindcss
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: false,
  },
});