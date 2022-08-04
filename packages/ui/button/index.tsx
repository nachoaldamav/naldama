import React from "react";

export const Button = ({ children, ...props }: any) => {
  const { className, styleType, ...rest } = props;

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
