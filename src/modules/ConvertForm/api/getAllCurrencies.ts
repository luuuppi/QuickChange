import axios from "axios";
import type TCurrencies from "../types/TCurrencies";

type TCurrenciesAPI = {
  data: TCurrencies;
};

const getAllCurrencies = async () => {
  const response = await axios.get<TCurrenciesAPI>(
    "https://api.currencyapi.com/v3/currencies/",
    {
      headers: {
        apikey: import.meta.env.VITE_API_KEY,
      },
      params: {
        type: "fiat",
      },
    }
  );

  return response.data.data;
};

export default getAllCurrencies;
