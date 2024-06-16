import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";
import clsx from "clsx";
import styles from "./IconButton.module.scss";

type IconButtonProps = {
  children: ReactNode;
  extraStyles?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: FC<IconButtonProps> = memo(({ children, extraStyles }) => {
  const style: string = clsx(styles.iconButton, extraStyles || "");

  return <button className={style}>{children}</button>;
});

export default IconButton;
