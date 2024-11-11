/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@songbird": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      name: "big-screen-components",
      entry: {
        index: "./src/App.tsx",
      },
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [
    react(),
    svgr(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
  },
});
