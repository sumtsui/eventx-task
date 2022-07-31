import React from "react";
import { TradingInfo } from "../App";
import getData from "../utils/getData";

function useTradingInfo() {
  const [data, setData] = React.useState<TradingInfo[]>([]);
  const [apiState, setApiState] = React.useState({
    error: false,
    loading: true,
  });

  React.useEffect(() => {
    const id = setInterval(() => {
      getData()
        .then(setData)
        .then(() => setApiState({ error: false, loading: false }))
        .catch(() => setApiState({ error: true, loading: false }));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return { data, ...apiState };
}

export default useTradingInfo;
