import { config, collection, fields } from "@keystatic/core";

export default config({
  ui: {
    brand: { name: "Comino Web" }
  },
  storage: {
    kind: "cloud",
  },
  cloud: {
    project: "comino-web/keystatic",
  },
  collections: {
    blogg: collection({
      label: "Blogginnlegg",
      slugField: "tittel",
      path: "src/content/blogg/*/",
      format: { contentField: "innhold" },
      schema: {
        tittel: fields.slug({ name: { label: "Tittel" } }),
        publisert: fields.date({ label: "Publiseringsdato" }),
        ingress: fields.text({ label: "Ingress", multiline: true }),
        innhold: fields.markdoc({
          label: "Innhold",
          extension: "mdoc",
          options: {
            image: {
              directory: "public/images/blogg",
              publicPath: "/images/blogg/",
            },
          },
        }),
        bilde: fields.image({
          label: "Hovudbilde",
          directory: "public/images/blogg",
          publicPath: "/images/blogg/",
        }),
        fokusPunktX: fields.select({
          label: "Horisontal posisjon",
          options: [
            { label: "Venstre", value: "left" },
            { label: "Senter", value: "center" },
            { label: "Høgre", value: "right" },
          ],
          defaultValue: "center",
        }),
        fokusPunktY: fields.select({
          label: "Vertikal posisjon",
          options: [
            { label: "Topp", value: "top" },
            { label: "Senter", value: "center" },
            { label: "Botn", value: "bottom" },
          ],
          defaultValue: "center",
        }),
      },
    }),
  },
});
