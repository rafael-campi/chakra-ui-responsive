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
      colors: {
        // Paleta de azul personalizada
        blue: {
          50: { value: "#eff6ff" },
          100: { value: "#dbeafe" },
          200: { value: "#bfdbfe" },
          300: { value: "#93c5fd" },
          400: { value: "#60a5fa" },
          500: { value: "#3b82f6" },
          600: { value: "#2563eb" },
          700: { value: "#1d4ed8" },
          800: { value: "#1e40af" },
          900: { value: "#1e3a8a" },
          950: { value: "#172554" },
        },
        // Paleta complementar (cyan/turquesa)
        cyan: {
          50: { value: "#ecfeff" },
          100: { value: "#cffafe" },
          200: { value: "#a5f3fc" },
          300: { value: "#67e8f9" },
          400: { value: "#22d3ee" },
          500: { value: "#06b6d4" },
          600: { value: "#0891b2" },
          700: { value: "#0e7490" },
          800: { value: "#155e75" },
          900: { value: "#164e63" },
        },
      },
    },
    semanticTokens: {
      colors: {
        // Cor primária - azul vibrante
        primary: {
          value: { base: "#2563eb", _dark: "#3b82f6" },
        },
        // Cor secundária - cyan/turquesa
        secondary: {
          value: { base: "#06b6d4", _dark: "#22d3ee" },
        },
        // Cor secundária clara
        secondary_light: {
          value: { base: "#cffafe", _dark: "#67e8f9" },
        },
        // Texto invertido (para fundos escuros)
        text_invert: {
          value: "#F4F4F4",
        },
        // Texto primário
        text_primary: {
          value: { base: "#2A2A2A", _dark: "#F4F4F4" },
        },
        // Texto secundário
        text_secondary: {
          value: { base: "#6B7280", _dark: "#9CA3AF" },
        },
        // Fundo da página
        bg: {
          value: { base: "#ffffff", _dark: "#0a1929" },
        },
        // Fundo secundário (cards, containers)
        "bg.secondary": {
          value: { base: "#eff6ff", _dark: "#0f2744" },
        },
        // Fundo terciário
        "bg.tertiary": {
          value: { base: "#dbeafe", _dark: "#1a3a5c" },
        },
        // Bordas
        border: {
          value: { base: "#bfdbfe", _dark: "#1e40af" },
        },
        // Cor de accent/destaque
        accent: {
          value: { base: "#1d4ed8", _dark: "#60a5fa" },
        },
      },
    },
  },
});