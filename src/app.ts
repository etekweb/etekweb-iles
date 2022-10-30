import { defineApp } from "iles";

export default defineApp({
  head() {
    return {
      meta: [
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,maximum-scale=1",
        },
      ],
      script: [
        {
          src: "https://www.google.com/recaptcha/api.js",
          async: true,
          defer: true,
        },
      ],
    };
  },
});
