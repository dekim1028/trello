import React from "react";
import * as STC from "./Button.style";

const Button = ({
  value,
  type,
  size,
  disabled,
  style,
  onClick,
}: {
  value: string;
  type: "primary" | "secondary";
  size: "sm" | "base" | "lg";
  disabled?: boolean;
  style?: any;
  onClick: () => void;
}) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <STC.Container
      type={type}
      size={size}
      disabled={disabled}
      onClick={handleClick}
    >
      {value}
    </STC.Container>
  );
};

export default Button;
