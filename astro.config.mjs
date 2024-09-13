import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
// export default defineConfig({
//   integrations: [tailwind(), mdx(), icon()],
//   output: 'hybrid',
//   adapter: vercel({
//     imageService: true,
//     imagesConfig: {
//       sizes: [320, 640, 1280],
//     }, 
//   }),
// });

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind(), icon()],
  output: 'server',
  adapter: vercel(),
});