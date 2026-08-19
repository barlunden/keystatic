import { defineConfig } from "astro/config";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import netlify from "@astrojs/netlify";

export default defineConfig({
    output: "hybrid",
    adapter: netlify(),
    integrations: [react(), markdoc(), keystatic()],
});