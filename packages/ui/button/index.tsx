import React from "react";
import { ButtonProps } from "./button.types";

export const Button = ({ children, ...props }: ButtonProps) => {
  const { className, styleType } = props;

  const customClass = `${className || ""} ${
    CLASSES.find((c) => c.name === styleType)?.className
  }`;

  return (
    <button onClick={props.onClick} className={customClass}>
      {children}
    </button>
  );
};

const CLASSES = [
  {
    name: "primary",
    className:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg",
  },
  {
    name: "secondary",
    className:
      "bg-white hover:bg-gray-600 text-black font-bold py-2 px-4 rounded-lg border border-gray-300",
  },
  {
    name: "success",
    className:
      "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg",
  },
  {
    name: "danger",
    className:
      "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg",
  },
  {
    name: "warning",
    className:
      "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg",
  },
  {
    name: "info",
    className:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg",
  },
];
