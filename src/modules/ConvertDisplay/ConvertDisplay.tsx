import { FC, useCallback, useState } from "react";
import { useConvertStore } from "../ConvertForm";
import { useQuery } from "@tanstack/react-query";
import getExchangeRates from "./api/getExchangeRates";
import { format } from "date-fns";
import convert from "./utils/convert";
import Button from "../../UI/Button/Button";
import MotionNumber from "../../UI/MotionNumber/MotionNumber";
import styles from "./ConvertDisplay.module.scss";

const ConvertDisplay: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const from = useConvertStore((state) => state.from);
  const to = useConvertStore((state) => state.to);
  const value = useConvertStore((state) => state.value);
  const { data: rate, isFetching } = useQuery({
    queryKey: ["Exchange", from.symbol, to.symbol],
    initialData: { meta: { last_updated_at: "" }, data: {} },
    queryFn: () => getExchangeRates(from.symbol, to.symbol),
    refetchOnWindowFocus: false,
  });
  const convertedValue = !isFetching
    ? convert(rate.data[to.symbol].value, parseInt(value))
    : undefined;
  const lastUpdatedDate = !isFetching
    ? format(rate.meta.last_updated_at, "MMM dd, y, kk:mm O")
    : undefined;

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
        <>
          <span className={styles.convertDisplay__result}>
            <span>
              <MotionNumber value={parseInt(value)} state="secondary" size="sm" rounded />{" "}
              {from.name} =
            </span>
            <span>
              <MotionNumber value={parseInt(convertedValue ?? "")} /> {to.name}
            </span>
          </span>
          <span className={styles.convertDisplay__lastUpdated}>
            Last updated on {lastUpdatedDate}
          </span>
        </>
      )}
    </div>
  );
};

export default ConvertDisplay;
