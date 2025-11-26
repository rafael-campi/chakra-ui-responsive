import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: `'Poppins', sans-serif`,
        },
        body: {
          value: `'Poppins', sans-serif`,
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: "#285E67",
        },
        secondary: {
          value: "#EBBFAE",
        },
        secondary_light: {
          value: "#FCE2D7",
        },
        text_invert: {
          value: "#F4F4F4",
        },
        text_primary: {
          value: "#2A2A2A",
        },
        text_secondary: {
          value: "#2B2B2B",
        },
      },
    },
  },
});
