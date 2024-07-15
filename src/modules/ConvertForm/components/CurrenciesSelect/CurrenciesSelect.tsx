import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import useConvertStore from "../../useConvertStore";
import searchCurrencies from "../../utils/searchCurrencies";
import getAllCurrencies from "../../api/getAllCurrencies";
import { useQuery } from "@tanstack/react-query";
import type TCurrencyInfo from "../../types/TCurrencyInfo";
import { Select, SelectItem } from "../../../../UI/Select/Select";

type CurrenciesDropDownProps = {
  type: "from" | "to";
  currentCurrency: TCurrencyInfo;
};

const CurrenciesSelect: FC<CurrenciesDropDownProps> = memo(
  ({ type, currentCurrency }) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const setCurrency = useConvertStore((state) => state.setCurrency);
    const { data: currencies } = useQuery({
      queryKey: ["currencies"],
      initialData: {},
      queryFn: getAllCurrencies,
      refetchOnWindowFocus: false,
    });
    const searchedCurrencies = searchCurrencies(Object.keys(currencies), searchValue);

    const selectCurrency = (item: string) => {
      const current = {
        country: currencies[item].countries[0].substring(0, 2).toLowerCase(),
        name: currencies[item].name_plural,
        symbol: currencies[item].code,
      };

      setCurrency(current, type);
      setSearchValue("");
    };

    const searchHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    }, []);

    return (
      <Select
        label={type[0].toUpperCase() + type.substring(1)}
        leadingIcon={`https://flagcdn.com/w40/${currentCurrency.country.toLowerCase()}.png`}
        text={`${currentCurrency.symbol} — ${currentCurrency.name}`}
        onChange={searchHandler}
      >
        {searchedCurrencies.map(
          (item, i) =>
            currencies[item].countries[0] && (
              <SelectItem
                key={i}
                leadingIcon={`https://flagcdn.com/w40/${currencies[item].countries[0].substring(0, 2).toLowerCase()}.png`}
                onClick={() => selectCurrency(item)}
              >
                {currencies[item].code} — {currencies[item].name_plural}
              </SelectItem>
            )
        )}
      </Select>
    );
  }
);

export default CurrenciesSelect;
