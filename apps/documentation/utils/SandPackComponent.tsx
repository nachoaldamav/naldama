import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import {
  BASE_STYLE,
  POSTCSS_CONFIG,
  TAILWIND_BASE,
} from "@site/utils/tailwindBase";

export default function SandpackTemplate({ code }) {
  return (
    <Sandpack
      theme={{
        colors: {
          surface1: "#011627",
          surface2: "#243b4c",
          surface3: "#112331",
          clickable: "#6988a1",
          base: "#808080",
          disabled: "#4D4D4D",
          hover: "#c5e4fd",
          accent: "#c5e4fd",
          error: "#ffcdca",
          errorSurface: "#811e18",
        },
        syntax: {
          plain: "#d6deeb",
          comment: {
            color: "#999999",
            fontStyle: "italic",
          },
          keyword: {
            color: "#c792ea",
            fontStyle: "italic",
          },
          tag: "#7fdbca",
          punctuation: "#7fdbca",
          definition: "#82aaff",
          property: {
            color: "#addb67",
            fontStyle: "italic",
          },
          static: "#f78c6c",
          string: "#ecc48d",
        },
        font: {
          body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          mono: 'CascadiaCode, "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
          size: "13px",
          lineHeight: "20px",
        },
      }}
      template="react"
      files={{
        "/App.js": code,
        "/tailwind.config.js": TAILWIND_BASE,
        "/postcss.config.js": POSTCSS_CONFIG,
        "/index.css": BASE_STYLE,
      }}
      options={{
        externalResources: ["https://cdn.tailwindcss.com"],
      }}
      customSetup={{
        dependencies: {
          react: "18",
          "react-dom": "18",
          "react-scripts": "4.0.0",
          "naldama-ui": "latest",
          tailwindcss: "^3.1.7",
          autoprefixer: "^10.4.8",
          postcss: "^8.4.14",
          "@tailwindcss/forms": "latest",
        },
      }}
    />
  );
}
