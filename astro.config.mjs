// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';
import lottie from "astro-integration-lottie";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(),lottie()],
  vite: {
    plugins: [tailwindcss()]
  }
});