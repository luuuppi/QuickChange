import { ChangeEvent, FC, useCallback } from "react";
import CurrenciesSelect from "./components/CurrenciesSelect/CurrenciesSelect";
import useConvertStore from "./useConvertStore";
import Button from "../../UI/Button/Button";
import switchIcon from "./static/swap-icon.svg";
import NumberInput from "../../UI/NumberInput/NumberInput";
import styles from "./ConvertForm.module.scss";

const ConvertForm: FC = () => {
  const from = useConvertStore((state) => state.from);
  const to = useConvertStore((state) => state.to);
  const switchCurrencies = useConvertStore((state) => state.switchCurrencies);
  const value = useConvertStore((state) => state.value);
  const setValue = useConvertStore((state) => state.setValue);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div className={styles.convertFrom}>
      <NumberInput
        label="Amount"
        placeholder="Enter amount..."
        onChange={changeHandler}
        value={value}
      />
      <CurrenciesSelect type="from" currentCurrency={from} />
      <Button
        size="icon"
        state="secondary"
        className={styles.convertFrom__switchButton}
        onClick={switchCurrencies}
      >
        <img src={switchIcon} alt="Switch currencies" />
      </Button>
      <CurrenciesSelect type="to" currentCurrency={to} />
    </div>
  );
};

export default ConvertForm;
