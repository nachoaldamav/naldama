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
];
