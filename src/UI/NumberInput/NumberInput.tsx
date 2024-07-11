import { FC, InputHTMLAttributes, memo } from "react";
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

  return (
    <form className={style}>
      <label className={styles.numberInput__label}>{label}</label>
      <input
        className={styles.numberInput__input}
        type="number"
        placeholder={placeholderCond}
        value={value}
        onChange={onChange}
      />
    </form>
  );
});

export default NumberInput;
