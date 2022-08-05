var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var ui_exports = {};
__export(ui_exports, {
  Button: () => Button,
  Input: () => Input
});
module.exports = __toCommonJS(ui_exports);

// button/index.tsx
var import_react = __toESM(require("react"));
var Button = ({ children, ...props }) => {
  var _a;
  const { className, styleType } = props;
  const customClass = `${className || ""} ${(_a = CLASSES.find((c) => c.name === styleType)) == null ? void 0 : _a.className} ${props.disabled ? "cursor-not-allowed" : ""}`;
  return /* @__PURE__ */ import_react.default.createElement("button", {
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
var import_react2 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react2.default.createElement("input", {
    type: props.type || "text",
    className: createClassname,
    ...props
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Input
});
