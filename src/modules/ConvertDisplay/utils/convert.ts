const convert = (rate: number, amount: number): string => {
  return (amount * rate).toFixed(2);
};

export default convert;
