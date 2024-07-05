import TRate from "./TRate";

type TExchange = {
  meta: {
    lastUpdated: string;
  };
  data: {
    [key: string]: TRate;
  };
};

export default TExchange;
