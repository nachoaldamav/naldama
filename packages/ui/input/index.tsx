import React from "react";
import { InputProps } from "./input.types";

const base = "rounded-lg w-fit px-3 py-1";

const colors: any = {
  primary: "border-2 border-blue-500",
  secondary: "border-2 border-gray-300",
};

export const Input = ({
  className,
  styleType = "primary",
  ...props
}: InputProps) => {
  const color: string = colors[styleType];
  const createClassname = `${base} ${color} ${className || ""}`;

  return (
    <input
      type={props.type || "text"}
      className={createClassname}
      {...props}
    ></input>
  );
};
