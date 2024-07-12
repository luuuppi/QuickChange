import { FC, useCallback, useState } from "react";
import { useConvertStore } from "../ConvertForm";
import { useQuery } from "@tanstack/react-query";
import getExchangeRates from "./api/getExchangeRates";
import convert from "./utils/convert";
import Button from "../../UI/Button/Button";
import styles from "./ConvertDisplay.module.scss";

const ConvertDisplay: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const from = useConvertStore((state) => state.from);
  const to = useConvertStore((state) => state.to);
  const value = useConvertStore((state) => state.value);
  const { data: rate, isFetching } = useQuery({
    queryKey: ["Exchange", from.symbol, to.symbol],
    initialData: { meta: { lastUpdated: "" }, data: {} },
    queryFn: () => getExchangeRates(from.symbol, to.symbol),
    refetchOnWindowFocus: false,
  });
  const convertedValue =
    !isFetching && convert(rate.data[to.symbol].value, parseInt(value));

  const clickHandler = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [rate]);

  return (
    <div className={styles.convertDisplay} data-open={isOpen}>
      {!isOpen ? (
        <Button className={styles.convertButton} onClick={clickHandler}>
          Convert
        </Button>
      ) : (
        <span className={styles.convertDisplay__result}>
          <span>
            {value} {from.name} =
          </span>
          <span>
            {convertedValue} {to.name}
          </span>
        </span>
      )}
    </div>
  );
};

export default ConvertDisplay;
