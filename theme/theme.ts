import { createTheme } from "@shopify/restyle";

export const lightTheme = createTheme({
  colors: {
    textAuthTitle: "#3F414E",
    textForgot: "#3F414E",
  },
  spacing: {},
});

export const darkTheme = createTheme({
  colors: {
    textAuthTitle: "#E1E1E1",
    textForgot: "#A1A4B2",
  },
  spacing: {},
});

export type TTheme = typeof lightTheme;
