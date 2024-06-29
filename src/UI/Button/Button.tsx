import { ButtonHTMLAttributes, FC, memo } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: string;
  extraStyles?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = memo(({ children, extraStyles, onClick }) => {
  const style: string = clsx(styles.button, extraStyles || "");

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
});

export default Button;
