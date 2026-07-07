import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
    tsconfigPaths(),
    tailwindcss(),
    command === "build"
      ? nitro({
          preset: "vercel",
        })
      : null,
  ].filter(Boolean),
}));
