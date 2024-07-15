import axios from "axios";
import type TExchange from "../types/TExchange";

const getExchangeRates = async (base: string, quote: string): Promise<TExchange> => {
  const response = await axios.get<TExchange>("https://api.currencyapi.com/v3/latest", {
    headers: {
      apikey: import.meta.env.VITE_API_KEY,
    },
    params: {
      type: "fiat",
      base_currency: base,
      currencies: quote,
    },
  });

  return response.data;
};

export default getExchangeRates;
