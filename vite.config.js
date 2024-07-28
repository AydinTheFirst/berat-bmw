import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Generouted from "@generouted/react-router/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Generouted()],
});
