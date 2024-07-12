import { ButtonHTMLAttributes, FC, memo, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Button.module.scss";

const buttonVariants = cva(styles.button, {
  variants: {
    state: {
      primary: styles["button--primary"],
      secondary: styles["button--secondary"],
    },
    size: {
      md: styles["button--md"],
      sm: styles["button--sm"],
      icon: styles["button--icon"],
    },
  },
  defaultVariants: {
    state: "primary",
    size: "md",
  },
});

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button: FC<ButtonProps> = memo(({ children, onClick, state, size, className }) => {
  return (
    <button className={buttonVariants({ state, size, className })} onClick={onClick}>
      {children}
    </button>
  );
});

export default Button;
