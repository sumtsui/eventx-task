import React from "react";
import { TradingInfo } from "../App";
import getData from "../utils/getData";

function useTradingInfo() {
  const [data, setData] = React.useState<TradingInfo[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const id = setInterval(() => {
      getData()
        .then(setData)
        .then(() => setError(false))
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return { data, loading, error };
}

export default useTradingInfo;
