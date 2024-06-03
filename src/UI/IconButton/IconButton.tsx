import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";
import styles from "./IconButton.module.scss";

type IconButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: FC<IconButtonProps> = memo(({ children }) => {
  return <button className={styles.iconButton}>{children}</button>;
});

export default IconButton;
