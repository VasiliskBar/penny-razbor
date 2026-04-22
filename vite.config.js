import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/penny-razbor/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        puzzle: resolve(__dirname, "puzzle.html"),
      },
    },
  },
});
