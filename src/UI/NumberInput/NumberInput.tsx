import { FC, InputHTMLAttributes, memo, useCallback, useRef } from "react";
import clsx from "clsx";
import styles from "./NumberInput.module.scss";

type NumberInputProps = {
  label: string;
  placeholder?: string;
  extraStyles?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const NumberInput: FC<NumberInputProps> = memo((props) => {
  const { label, placeholder, extraStyles, onChange, value } = props;
  const style: string = clsx(styles.numberInput, extraStyles || "");
  const placeholderCond: string | undefined = placeholder ? placeholder : undefined;
  const inputRef = useRef<HTMLInputElement>(null);

  const onFocus = useCallback(() => {
    inputRef.current?.select();
  }, []);

  return (
    <form className={style}>
      <label className={styles.numberInput__label}>{label}</label>
      <input
        className={styles.numberInput__input}
        type="number"
        placeholder={placeholderCond}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        ref={inputRef}
      />
    </form>
  );
});

export default NumberInput;
