import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import useConvertStore from "../../useConvertStore";
import searchCurrencies from "../../utils/searchCurrencies";
import getAllCurrencies from "../../api/getAllCurrencies";
import { useQuery } from "@tanstack/react-query";
import type TCurrencyInfo from "../../types/TCurrencyInfo";
import DropDownButton from "../../../../UI/DropDownButton/DropDownButton";
import CurrencyInfo from "../CurrencyInfo/CurrencyInfo";
import DropDownList from "../../../../UI/DropDownList/DropDownList";
import ListItem from "../../../../UI/ListItem/ListItem";
import styles from "./CurrenciesDropDown.module.scss";

type CurrenciesDropDownProps = {
  label: string;
  type: "from" | "to";
  currentCurrency: TCurrencyInfo;
};

const CurrenciesDropDown: FC<CurrenciesDropDownProps> = memo((props) => {
  const { label, type, currentCurrency } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const setCurrency = useConvertStore((state) => state.setCurrency);
  const { data: currencies } = useQuery({
    queryKey: ["currencies"],
    initialData: {},
    queryFn: getAllCurrencies,
    refetchOnWindowFocus: false,
  });
  const searchedCurrencies = searchCurrencies(Object.keys(currencies), searchValue);

  const toggleDropDown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const selectCurrency = (item: string) => {
    const current = {
      country: currencies[item].countries[0].substring(0, 2).toLowerCase(),
      name: currencies[item].name_plural,
      symbol: currencies[item].code,
    };

    setCurrency(current, type);
    setSearchValue("");
    toggleDropDown();
  };

  const searchHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  return (
    <div>
      <DropDownButton label={label} onClick={toggleDropDown}>
        <CurrencyInfo
          country={currentCurrency.country.toLowerCase()}
          name={currentCurrency.name}
          symbol={currentCurrency.symbol}
        />
      </DropDownButton>
      {isOpen && (
        <DropDownList extraStyles={styles.dropDownList} changeHandler={searchHandler}>
          {searchedCurrencies.map(
            (item, i) =>
              currencies[item].countries[0] && (
                <ListItem key={i} clickHandler={() => selectCurrency(item)}>
                  <CurrencyInfo
                    country={currencies[item].countries[0].substring(0, 2).toLowerCase()}
                    name={currencies[item].name_plural}
                    symbol={currencies[item].code}
                  />
                </ListItem>
              )
          )}
        </DropDownList>
      )}
    </div>
  );
});

export default CurrenciesDropDown;
