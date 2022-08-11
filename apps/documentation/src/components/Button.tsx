import React from "react";
import { Button } from "naldama-ui";

const CustomButton = ({ children, styleType, ...props }) => {
  return (
    <Button styleType={styleType} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
