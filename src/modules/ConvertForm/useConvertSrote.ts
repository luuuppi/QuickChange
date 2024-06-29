import { create } from "zustand";
import { TCurrencyInfo } from "./types/TCurrencyInfo";

type ConvertState = {
  from: TCurrencyInfo;
  to: TCurrencyInfo;
  setCurrency: (currencyInfo: TCurrencyInfo, type: "from" | "to") => void;
};

const useConvertStore = create<ConvertState>((set) => ({
  from: { country: "US", name: "US Dollars", symbol: "USD" },
  to: { country: "EU", name: "Euros", symbol: "EUR" },
  setCurrency: (currencyInfo, type) => {
    if (type === "from") {
      set({ from: currencyInfo });
    } else {
      set({ to: currencyInfo });
    }
  },
}));

export default useConvertStore;
