import { FC, memo, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./MotionNumber.module.scss";

const MotionNumberVariants = cva(styles.motionNumber, {
  variants: {
    state: {
      primary: styles["motionNumber--primary"],
      secondary: styles["motionNumber--secondary"],
      darker: styles["motionNumber--darker"],
    },
    size: {
      md: styles["motionNumber--md"],
      sm: styles["motionNumber--sm"],
    },
  },
  defaultVariants: {
    state: "primary",
    size: "md",
  },
});

type MotionNumberProps = {
  value: number;
  rounded?: boolean;
  decimalPlace?: number;
  className?: CSSModuleClasses;
} & VariantProps<typeof MotionNumberVariants>;

const MotionNumber: FC<MotionNumberProps> = memo(
  ({ value, rounded = false, decimalPlace, state, size, className }) => {
    const motionNumber = useSpring(value, { stiffness: 75, damping: 17, mass: 1 });
    const motionValue = useTransform(motionNumber, (current: number) => {
      if (rounded) {
        return Math.round(current).toString();
      }

      return current.toFixed(decimalPlace ?? 2);
    });

    useEffect(() => {
      motionNumber.set(value || 0);
    }, [value, motionNumber]);

    return (
      <motion.span className={MotionNumberVariants({ state, size, className })}>
        {motionValue}
      </motion.span>
    );
  }
);

export default MotionNumber;
