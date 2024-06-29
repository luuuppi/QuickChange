import { create } from "zustand";
import { TCurrencyInfo } from "./types/TCurrencyInfo";
import { devtools } from "zustand/middleware";

type ConvertState = {
  value: string;
  setValue: (value: string) => void;
  from: TCurrencyInfo;
  to: TCurrencyInfo;
  setCurrency: (currencyInfo: TCurrencyInfo, type: "from" | "to") => void;
  switchCurrencies: () => void;
};

const useConvertStore = create<ConvertState>()(
  devtools((set, get) => ({
    value: "",
    setValue: (value) => {
      set({ value });
    },
    from: { country: "US", name: "US Dollars", symbol: "USD" },
    to: { country: "EU", name: "Euros", symbol: "EUR" },
    setCurrency: (currencyInfo, type) => {
      if (type === "from") {
        set({ from: currencyInfo });
      } else {
        set({ to: currencyInfo });
      }
    },
    switchCurrencies: () => {
      set({ from: get().to, to: get().from });
    },
  }))
);

export default useConvertStore;
