import { ButtonHTMLAttributes, FC, memo, ReactNode } from "react";
import { motion } from "framer-motion";
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
    <motion.button
      className={buttonVariants({ state, size, className })}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
});

export default Button;
