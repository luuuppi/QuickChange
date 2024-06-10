import { ChangeEvent, FC, memo } from "react";
import styles from "./NumberInput.module.scss";

type NumberInputProps = {
  label: string;
  placehodler?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const NumberInput: FC<NumberInputProps> = memo(({ label, placehodler, onChange }) => {
  const placehodlerCond: string | undefined = placehodler ? placehodler : undefined;

  return (
    <form className={styles.numberInput}>
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
