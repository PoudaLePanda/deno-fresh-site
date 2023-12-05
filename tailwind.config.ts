import { type Config } from "tailwindcss";

export default {
  
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  variants: {
    typography: ["dark"],
  },
  safelist: [
    {
      pattern: /\-primary\-/,
    },
    {
      pattern: /\-secondary\-/,
    },
    {
      pattern: /\-accent\-/,
    },
    {
      pattern: /\-destructive\-/,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      colors: {
        background: {
          DEFAULT: "var(--background)",
        },
        foreground: "var(--foreground)",
        primary: {
          50: "color-mix(in srgb, var(--primary) 5%, white)",
          100: "color-mix(in srgb, var(--primary) 10%, white)",
          200: "color-mix(in srgb, var(--primary) 30%, white)",
          300: "color-mix(in srgb, var(--primary) 50%, white)",
          400: "color-mix(in srgb, var(--primary) 70%, white)",
          500: "color-mix(in srgb, var(--primary) 100%, white)",
          600: "color-mix(in srgb, var(--primary), black 10%)",
          700: "color-mix(in srgb, var(--primary), black 30%)",
          800: "color-mix(in srgb, var(--primary), black 50%)",
          900: "color-mix(in srgb, var(--primary), black 70%)",
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          50: "color-mix(in srgb, var(--secondary) 5%, white)",
          100: "color-mix(in srgb, var(--secondary) 10%, white)",
          200: "color-mix(in srgb, var(--secondary) 30%, white)",
          300: "color-mix(in srgb, var(--secondary) 50%, white)",
          400: "color-mix(in srgb, var(--secondary) 70%, white)",
          500: "color-mix(in srgb, var(--secondary) 100%, white)",
          600: "color-mix(in srgb, var(--secondary), black 10%)",
          700: "color-mix(in srgb, var(--secondary), black 30%)",
          800: "color-mix(in srgb, var(--secondary), black 50%)",
          900: "color-mix(in srgb, var(--secondary), black 70%)",
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          50: "color-mix(in srgb, var(--accent) 5%, white)",
          100: "color-mix(in srgb, var(--accent) 10%, white)",
          200: "color-mix(in srgb, var(--accent) 30%, white)",
          300: "color-mix(in srgb, var(--accent) 50%, white)",
          400: "color-mix(in srgb, var(--accent) 70%, white)",
          500: "color-mix(in srgb, var(--accent) 100%, white)",
          600: "color-mix(in srgb, var(--accent), black 10%)",
          700: "color-mix(in srgb, var(--accent), black 30%)",
          800: "color-mix(in srgb, var(--accent), black 50%)",
          900: "color-mix(in srgb, var(--accent), black 70%)",
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          50: "color-mix(in srgb, var(--destructive) 5%, white)",
          100: "color-mix(in srgb, var(--destructive) 10%, white)",
          200: "color-mix(in srgb, var(--destructive) 30%, white)",
          300: "color-mix(in srgb, var(--destructive) 50%, white)",
          400: "color-mix(in srgb, var(--destructive) 70%, white)",
          500: "color-mix(in srgb, var(--destructive) 100%, white)",
          600: "color-mix(in srgb, var(--destructive), black 10%)",
          700: "color-mix(in srgb, var(--destructive), black 30%)",
          800: "color-mix(in srgb, var(--destructive), black 50%)",
          900: "color-mix(in srgb, var(--destructive), black 70%)",
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        info: "var(--info)",
        success: "var(--success)",
        warning: "var(--warning)",
        "warning-foreground": "var(--warning-foreground)",
        error: "var(--error)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        "base-100": "var(--base-100)",
        "base-200": "var(--base-200)",
        "base-300": "var(--base-300)",
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
} as Config;
