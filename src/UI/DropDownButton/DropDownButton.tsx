import { FC, ReactNode, memo, useCallback, useState } from "react";
import { motion } from "framer-motion";
import iconUrl from "../../static/arrow.svg";
import styles from "./DropDownButton.module.scss";

type DropDownButtonProps = {
  label: string;
  children: ReactNode;
  onClick: () => void;
};

const DropDownButton: FC<DropDownButtonProps> = memo(({ label, children, onClick }) => {
  const [rotate, setRotate] = useState<number>(0);

  const clickHandler = useCallback(() => {
    setRotate((prev) => (prev === 0 ? 180 : 0));
    onClick();
  }, [onClick]);

  return (
    <div className={styles.DropDownButton} onClick={clickHandler}>
      <span className={styles.DropDownButton__label}>{label}</span>
      <div className={styles.DropDownButton__content}>
        <span className={styles.DropDownButton__contentText}>{children}</span>
        <motion.img
          className={styles.DropDownButton__icon}
          src={iconUrl}
          alt="Arrow icon"
          animate={{ rotate }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
});

export default DropDownButton;
