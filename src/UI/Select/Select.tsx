import { FC, memo, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import arrowIcon from "/arrow.svg";
import styles from "./Select.module.scss";

type SelectItemProps = {
  children: ReactNode;
  leadingIcon?: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
};

type SelectProps = {
  label: string;
  text: string;
  leadingIcon?: string;
  children: ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const menuAnimation: Variants = {
  initial: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", duration: 0.4, delay: 0.15 },
  },
  exit: { scale: 0, opacity: 0 },
};

const SelectItem: FC<SelectItemProps> = memo(({ children, leadingIcon, onClick }) => {
  return (
    <li className={styles.selectItem} onClick={onClick}>
      {leadingIcon && (
        <img
          src={leadingIcon}
          loading="lazy"
          className={styles.selectItem__leadingIcon}
        />
      )}
      <span className={styles.selectItem__text}>{children}</span>
    </li>
  );
});

const Select: FC<SelectProps> = memo(
  ({ label, text, leadingIcon, children, onChange }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [rotate, setRotate] = useState<number>(0);
    const buttonRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const toggleList = useCallback(() => {
      setIsOpen((prev) => !prev);
      setRotate((prev) => (prev === 0 ? 180 : 0));
    }, []);

    useEffect(() => {
      const closeList = (e: MouseEvent) => {
        const isButton = buttonRef.current?.contains(e.target as Node);
        const isInput = inputRef.current?.contains(e.target as Node);

        if (isButton || isInput) return;

        setIsOpen(false);
        setRotate(0);
      };

      document.addEventListener("click", closeList);

      return () => {
        document.removeEventListener("click", closeList);
      };
    }, []);

    return (
      <div className={styles.select}>
        <span className={styles.select__label}>{label}</span>
        <div className={styles.selectButton} onClick={toggleList} ref={buttonRef}>
          {leadingIcon && (
            <img src={leadingIcon} className={styles.selectButton__leadingIcon} />
          )}
          <span className={styles.selectButton__text}>{text}</span>
          <motion.img
            src={arrowIcon}
            className={styles.selectButton__icon}
            animate={{ rotate }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.selectMenu}
              variants={menuAnimation}
              initial="initial"
              animate="visible"
              exit="exit"
            >
              <input
                type="text"
                placeholder="Search..."
                className={styles.selectMenu__search}
                ref={inputRef}
                onChange={onChange}
              />
              <ul className={styles.selectMenu__list}>{children}</ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

export { Select, SelectItem };
