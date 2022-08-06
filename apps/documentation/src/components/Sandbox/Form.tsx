import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";

import {
  BASE_STYLE,
  POSTCSS_CONFIG,
  TAILWIND_BASE,
} from "@site/utils/tailwindBase";
import { sandpackTheme } from "@site/utils/sandpackTheme";

const code = `import "./index.css";
import React, { useState } from "react";
import { Input } from "naldama-ui";

export default function FormExample() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="w-3/4 mx-auto my-4 flex flex-col gap-3 justify-center items-center">
      <Input
        className="w-full"
        id="test_input"
        placeholder="Introduce tu nombre"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        className="w-full"
        placeholder="Selecciona una fecha"
        styleType="primary"
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <Input
        className="w-1/2"
        placeholder="Contraseña"
        styleType="primary"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    </form>
  );
}
`;

export default function Form() {
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
        externalResources: [
          "https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css",
        ],
        editorHeight: "calc(75vh - 64px)",
      }}
      customSetup={{
        dependencies: {
          react: "18",
          "react-dom": "18",
          "react-scripts": "4.0.0",
          "naldama-ui": "0.0.1",
          tailwindcss: "^3.1.7",
          autoprefixer: "^10.4.8",
          postcss: "^8.4.14",
        },
      }}
    />
  );
}
