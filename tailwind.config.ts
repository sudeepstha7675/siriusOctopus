import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
        ],
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
        // Enhanced SiriusApp brand colors
        sirius: {
          // Base (Primary Purple)
          base: {
            DEFAULT: "hsl(270, 100%, 20%)", // Light mode
            dark: "hsl(250, 85%, 70%)", // Dark mode
            rgb: "51, 0, 102",
            foreground: "hsl(0, 0%, 100%)",
            "foreground-dark": "hsl(240, 20%, 10%)",
          },
          // Primary (Magenta)
          primary: {
            DEFAULT: "hsl(320, 100%, 30%)", // Light mode
            dark: "hsl(250, 85%, 70%)", // Dark mode
            rgb: "153, 0, 102",
            foreground: "hsl(0, 0%, 100%)",
            "foreground-dark": "hsl(240, 20%, 10%)",
          },
          // Secondary (Pink)
          secondary: {
            DEFAULT: "hsl(301, 100%, 64%)",
            dark: "hsl(260, 75%, 65%)", // Softer purple for dark mode
            rgb: "255, 73, 252",
            foreground: "hsl(270, 100%, 20%)",
            "foreground-dark": "hsl(240, 20%, 10%)",
          },
          // Highlight (Cyan)
          highlight: {
            DEFAULT: "hsl(180, 100%, 70%)", // Light mode
            dark: "hsl(180, 90%, 65%)", // Slightly muted for dark
            rgb: "102, 255, 255",
            foreground: "hsl(270, 100%, 20%)",
            "foreground-dark": "hsl(240, 20%, 10%)",
          },
        },
      },
      fontSize: {
        // Typography sizes from the guidelines
        display: ["50px", { lineHeight: "1.2", fontWeight: "900" }], // H1
        title: ["32px", { lineHeight: "1.3", fontWeight: "700" }], // H2
        heading: ["24px", { lineHeight: "1.4", fontWeight: "700" }], // H3
        subtitle: ["18px", { lineHeight: "1.5", fontWeight: "700" }], // Subtitle
        body: ["12px", { lineHeight: "1.6", fontWeight: "400" }], // Body text
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
