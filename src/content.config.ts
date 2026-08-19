import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blogg = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/blogg" }),
  schema: z.object({
    tittel: z.string(),
    publisert: z.date().optional(),
    ingress: z.string().optional(),
    bilde: z.string().optional(),
    fokusPunktX: z.enum(["left", "center", "right"]).default("center"),
    fokusPunktY: z.enum(["top", "center", "bottom"]).default("center"),
  }),
});

export const collections = { blogg };
