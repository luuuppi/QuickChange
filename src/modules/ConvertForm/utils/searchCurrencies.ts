const searchCurrencies = (currencies: string[], query: string): string[] => {
  return currencies.filter((currency) =>
    currency.toLowerCase().includes(query.toLowerCase())
  );
};

export default searchCurrencies;
