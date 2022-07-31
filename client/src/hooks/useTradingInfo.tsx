import React from "react";
import { TradingInfo } from "../App";
import { getData } from "../utils/getData";
import { mockApiCall } from "../utils/mocks";

function useTradingInfo() {
  const [data, setData] = React.useState<TradingInfo[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const id = setInterval(() => {
      // mockApiCall()
      getData()
        .then(setData)
        .then(() => setError(false))
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }, 1000); // on the server it calls downstream every 5 seconds, here setting it to 1 second, to minic there are serveral clients making serveral requests within the 5 second request cache time.
    return () => clearInterval(id);
  }, []);

  return { data, loading, error };
}

export default useTradingInfo;
