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
import React2, { useState } from "react";
var base = "rounded-lg w-fit px-3 py-1 bg-transparent focus:outline-none";
var colors = {
  primary: "border-2 focus:border-blue-500",
  secondary: "border-2 border-gray-300"
};
var Input = ({
  className,
  styleType = "primary",
  type = "text",
  ...props
}) => {
  const color = colors[styleType];
  const createClassname = `${base} ${color} ${className || ""}`;
  const [changeType, setChangeType] = useState(type);
  return /* @__PURE__ */ React2.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React2.createElement("input", {
    type: changeType,
    className: createClassname,
    ...props
  }), type === "password" && /* @__PURE__ */ React2.createElement("span", {
    className: "absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 cursor-pointer",
    onClick: () => {
      setChangeType(changeType === "text" ? "password" : "text");
    }
  }, type === "password" ? "\u{1F512}" : "\u{1F50D}"));
};
export {
  Button,
  Input
};
