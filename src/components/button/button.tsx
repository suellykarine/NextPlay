import React from "react";

import styles from "./button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
}

type Props = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ children, className, ...rest }) => {
  const buttonClasses = `${styles["c-button"]} ${className || ""}`.trim();

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};
