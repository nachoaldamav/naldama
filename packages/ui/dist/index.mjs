// button/index.tsx
import React from "react";
var Button = ({ children, ...props }) => {
  var _a;
  const { className, styleType } = props;
  const customClass = `${className || ""} ${(_a = CLASSES.find((c) => c.name === styleType)) == null ? void 0 : _a.className} ${props.disabled ? "cursor-not-allowed" : ""}`;
  return /* @__PURE__ */ React.createElement("button", {
    onClick: props.onClick,
    className: customClass
  }, children);
};
var CLASSES = [
  {
    name: "primary",
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
  },
  {
    name: "secondary",
    className: "bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-lg border border-gray-300"
  },
  {
    name: "success",
    className: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
  },
  {
    name: "danger",
    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
  },
  {
    name: "warning",
    className: "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
  },
  {
    name: "info",
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
  }
];

// input/index.tsx
import React2 from "react";
var base = "rounded-lg w-fit px-3 py-1";
var colors = {
  primary: "border-2 border-blue-500",
  secondary: "border-2 border-gray-300"
};
var Input = ({
  className,
  styleType = "primary",
  ...props
}) => {
  const color = colors[styleType];
  const createClassname = `${base} ${color} ${className || ""}`;
  return /* @__PURE__ */ React2.createElement("input", {
    type: props.type || "text",
    className: createClassname,
    ...props
  });
};
export {
  Button,
  Input
};
