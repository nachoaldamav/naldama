import React, { useState } from "react";
import { InputProps } from "./input.types";

const base = "rounded-lg w-fit px-3 py-1 bg-transparent focus:outline-none";

const colors: any = {
  primary: "border-2 focus:border-blue-500",
  secondary: "border-2 border-gray-300",
};

export const Input = ({
  className,
  styleType = "primary",
  type = "text",
  ...props
}: InputProps) => {
  const color: string = colors[styleType];
  const createClassname = `${base} ${color} ${className || ""}`;
  const [changeType, setChangeType] = useState(type);

  return (
    <div className="relative">
      <input type={changeType} className={createClassname} {...props}></input>
      {type === "password" && (
        <span
          className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 cursor-pointer"
          onClick={() => {
            setChangeType(changeType === "text" ? "password" : "text");
          }}
        >
          {type === "password" ? "🔒" : "🔍"}
        </span>
      )}
    </div>
  );
};
