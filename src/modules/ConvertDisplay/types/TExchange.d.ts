import TRate from "./TRate";

type TExchange = {
  meta: {
    last_updated_at: string;
  };
  data: {
    [key: string]: TRate;
  };
};

export default TExchange;
