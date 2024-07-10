import { FC } from "react";
import CurrenciesDropDown from "./components/CurrenciesDropDown/CurrenciesDropDown";
import useConvertStore from "./useConvertStore";
import IconButton from "../../UI/IconButton/IconButton";
import switchIcon from "./static/swap-icon.svg";
import NumberInput from "../../UI/NumberInput/NumberInput";
import styles from "./ConvertForm.module.scss";

const ConvertForm: FC = () => {
  const from = useConvertStore((state) => state.from);
  const to = useConvertStore((state) => state.to);
  const switchCurrencies = useConvertStore((state) => state.switchCurrencies);
  const value = useConvertStore((state) => state.value);
  const setValue = useConvertStore((state) => state.setValue);

  return (
    <div className={styles.convertFrom}>
      <NumberInput
        label="Amount"
        placehodler="Enter amount..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <CurrenciesDropDown label="From" type="from" currentCurrency={from} />
      <IconButton
        extraStyles={styles.convertFrom__switchButton}
        onClick={switchCurrencies}
      >
        <img src={switchIcon} alt="Switch currencies" />
      </IconButton>
      <CurrenciesDropDown label="To" type="to" currentCurrency={to} />
    </div>
  );
};

export default ConvertForm;
