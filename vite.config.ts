import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "js/[name]-[hash].js",
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? "";
          if (name.endsWith(".css")) return "css/[name]-[hash][extname]";
          return "images/[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true
  }
});

