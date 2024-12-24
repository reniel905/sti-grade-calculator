import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({

  base: '/sti-grade-calculator/',
  build: {
    outDir: "build",
  },

  plugins: [react()],
});
