import { defineApp } from "iles";
import site from "@/site";

export default defineApp({
  head() {
    return {
      meta: [
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,maximum-scale=1",
        },
        {
          property: "og:title",
          content: site.title,
        },
        {
          property: "og:description",
          content: site.description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: "/etekweb-share-card.jpg",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:image",
          content: "/etekweb-share-card.jpg",
        },
        {
          name: "twitter:title",
          content: site.title,
        },
        {
          name: "twitter:description",
          content: site.description,
        },
      ],
    };
  },
});
