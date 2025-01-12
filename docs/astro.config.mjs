// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

import starlightVersions from "starlight-versions";
import starlightCoolerCredit from "starlight-cooler-credit";

const githubBaseUrl = "https://github.com/vighnesh153/google-video-discovery";

// https://astro.build/config
export default defineConfig({
  site: "https://googlevideodiscovery.vighnesh153.dev",
  integrations: [
    starlight({
      title: "Google Video Discovery",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      social: {
        github: githubBaseUrl,
        linkedin: "https://www.linkedin.com/in/vighnesh153",
        email: "mailto:pikachu@vighnesh153.dev",
      },
      editLink: {
        baseUrl: `${githubBaseUrl}/edit/main/docs`,
      },
      customCss: [
        "./src/tailwind.css",
      ],
      plugins: [
        starlightCoolerCredit(),
        // starlightVersions({
        //   versions: [{
        //     slug: "v0.x",
        //   }],
        // }),
      ],
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Example Guide", slug: "guides/example" },
          // ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
