import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
  base: {},
  variants: {
    size: {
      xl: {
        fontSize: "lg",
        px: 6,
        py: 6,
        color: "green",
      },
      xxl: {
        fontSize: "20px",
        px: 30,
        py: 30,
        color: "red",
      },
    },
    breakpoint: {
      mobile: {
        base: {
          backgroundColor: "green",
          boxShadow: "md",
          padding: "20px",
        },
      },
      tablet: {
        base: {
          backgroundColor: "pink",
          boxShadow: "md",
          padding: "30px",
        },
      },
      desktop: {
        base: {
          backgroundColor: "red",
          boxShadow: "lg",
          padding: "40px",
        },
      },
    },
  },
  defaultVariants: { size: null, variant: null },
});

const headingRecipe = defineRecipe({
  base: {
    fontWeight: "bold",
    color: "brand.text",
  },
  variants: {
    size: {
      variant1: {
        fontSize: { base: "35px", md: "45px" },
        fontWeight: 400,
      },
    },
  },
  defaultVariants: { size: "variant1" },
});

const customConfig = defineConfig({
  theme: {
    recipes: {
      heading: headingRecipe,
      button: buttonRecipe,
    },
    tokens: {
      fonts: {
        heading: { value: "system-ui, sans-serif" },
        body: { value: `'Poppins', sans-serif` },
      },
      opacity: {
        brand: {
          80: { value: "0.8" },
          100: { value: "1" },
        },
      },
      colors: {
        primary: { value: "#0FEE0F" },
        brand: {
          50: { value: "#171717" },
          100: { value: "#f5f5f5" },
          200: { value: "#080808" },
          300: { value: "#020202" },
          400: { value: "green" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          bgBody: { value: "{colors.brand.50}" },
          bgModal: { value: "{colors.brand.300}" },
          bgFooter: { value: "{colors.brand.200}" },
          bgCard: { value: "{colors.brand.200}" },
          text: { value: "{colors.brand.100}" },
          textContrast: { value: "{white}" },
          palitra: { value: "red" },
        },
      },
    },
  },
  globalCss: {
    ":root": {
      "--header-height": { base: "100px" },
      "--content-height": "calc(100dvh - var(--header-height))",
    },
    body: {
      userSelect: "none",
      fontFamily: "body",
      color: "white",
      backgroundColor: "brand.bgBody",
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
