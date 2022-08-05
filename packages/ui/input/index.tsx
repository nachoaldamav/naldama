import React from "react";
import { InputProps } from "./input.types";

const colors = {
  primary: "rounded-lg w-full px-3 py-1",
};

export const Input = ({ className, styleType, ...props }: InputProps) => {
  const createClassname = `${colors.primary} ${className || ""}`;

  return (
    <input
      type={props.type || "text"}
      className={createClassname}
      {...props}
    ></input>
  );
};
