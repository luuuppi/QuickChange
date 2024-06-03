import { ButtonHTMLAttributes, FC, memo } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = memo(({ children }) => {
  return <button className={styles.button}>{children}</button>;
});

export default Button;
