import { FC, InputHTMLAttributes, memo } from "react";
import clsx from "clsx";
import styles from "./NumberInput.module.scss";

type NumberInputProps = {
  label: string;
  placehodler?: string;
  extraStyles?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const NumberInput: FC<NumberInputProps> = memo((props) => {
  const { label, placehodler, extraStyles, onChange, value } = props;
  const style: string = clsx(styles.numberInput, extraStyles || "");
  const placehodlerCond: string | undefined = placehodler ? placehodler : undefined;

  return (
    <form className={style}>
      <label className={styles.numberInput__label}>{label}</label>
      <input
        className={styles.numberInput__input}
        type="number"
        placeholder={placehodlerCond}
        value={value}
        onChange={onChange}
      />
    </form>
  );
});

export default NumberInput;
