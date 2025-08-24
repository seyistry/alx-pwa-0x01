import React from "react";

interface ButtonProps {
  title: string;
  action?: () => void;
}

const Button = (props: ButtonProps) => {
  return <div>{props.title}</div>;
};

export default Button;
