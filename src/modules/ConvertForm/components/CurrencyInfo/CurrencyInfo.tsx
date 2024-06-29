import { FC, memo } from "react";
import type TCurrencyInfo from "../../types/TCurrencyInfo";
import styles from "./CurrencyInfo.module.scss";

const CurrencyInfo: FC<TCurrencyInfo> = memo(({ country, symbol, name }) => {
  return (
    <>
      <img
        className={styles.currencyInfo__image}
        loading="lazy"
        src={`https://flagcdn.com/w40/${country}.png`}
        alt={country}
      />
      <span className={styles.currencyInfo__title}>
        {symbol} — {name}
      </span>
    </>
  );
});

export default CurrencyInfo;
