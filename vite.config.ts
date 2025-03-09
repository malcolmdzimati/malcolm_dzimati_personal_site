import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Replace 'your-repo-name' with your actual GitHub repository name
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // 👈 Set this to your repo name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});