import { createStitches } from "@stitches/react";

export const {
  styled,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
} = createStitches({
  theme: {
    colors: {
      background: "#fafafa",
      white: "#ffffff",

      "yellow-dark": "#c47f17",
      yellow: "#dbac2c",
      "yellow-light": "#f1e9c9",

      "purple-dark": "#4b2995",
      purple: "#8047f8",
      "purple-light": "#ebe5f9",

      "base-title": "#272221",
      "base-subtitle": "#403937",
      "base-text": "#574f4d",
      "base-label": "#8d8686",
      "base-hover": "#d7d5d5",
      "base-button": "#e6e5e5",
      "base-input": "#ededed",
      "base-card": "#f3f2f2",
    },
  },
});
