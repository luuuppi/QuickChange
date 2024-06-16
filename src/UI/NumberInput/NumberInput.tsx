import { ChangeEvent, FC, memo } from "react";
import clsx from "clsx";
import styles from "./NumberInput.module.scss";

type NumberInputProps = {
  label: string;
  placehodler?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  extraStyles: string;
};

const NumberInput: FC<NumberInputProps> = memo((props) => {
  const { label, placehodler, onChange, extraStyles } = props;
  const style: string = clsx(styles.numberInput, extraStyles || "");
  const placehodlerCond: string | undefined = placehodler ? placehodler : undefined;

  return (
    <form className={style}>
      <label className={styles.numberInput__label}>{label}</label>
      <input
        className={styles.numberInput__input}
        type="number"
        placeholder={placehodlerCond}
        onChange={(e) => onChange(e)}
      />
    </form>
  );
});

export default NumberInput;
