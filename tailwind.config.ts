import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          "100": "hsl(var(--accent-100))",
          "200": "hsl(var(--accent-200))",
          "300": "hsl(var(--accent-300))",
          "400": "hsl(var(--accent-400))",
          "500": "hsl(var(--accent-500))",
          "600": "hsl(var(--accent-600))",
          "700": "hsl(var(--accent-700))",
          "800": "hsl(var(--accent-800))",
          "900": "hsl(var(--accent-900))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        light: {
          colors: {
            default: {
              DEFAULT: "#ededed",
              "100": "#ededed",
              "200": "#e6e6e6",
              "300": "#e0e0e0",
              "400": "#e6e6e6",
              "500": "#c4c4c4",
              "600": "#a6a6a6",
              "700": "#8c8c8c",
              "800": "#7a7a7a",
              "900": "#616161",
              foreground: "#000",
            },
          },
        },
        dark: {
          colors: {
            default: {
              DEFAULT: "#0f0f0f",
              "100": "#0f0f0f",
              "200": "#171717",
              "300": "#212121",
              "400": "#242424",
              "500": "#3d3d3d",
              "600": "#828282",
              "700": "#8a8a8a",
              "800": "#787878",
              "900": "#9c9c9c",
              foreground: "#fff",
            },
          },
        },
      },
      layout: {
        borderWidth: {
          small: "0.5px",
          medium: "1px",
          large: "1.5px",
        },
      },
    }),
  ],
} satisfies Config;

export default config;
