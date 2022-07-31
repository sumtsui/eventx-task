import React from "react";
import "./App.css";
import PriceBox from "./components/PriceBox";
import useTradingInfo from "./hooks/useTradingInfo";

export type TradingInfo = {
  name: string;
  priceUsd: string;
  volumeUsd24Hr: string;
  changePercent24Hr: string;
};

function App() {
  const { data, loading, error } = useTradingInfo();

  return (
    <div className="App">
      <h1>Cryptocurrency Realtime Price</h1>
      {error && <p>Error occurred.</p>}
      {loading && <p>Loading...</p>}
      <div className="prices">
        {data.map((crypto) => (
          <PriceBox data={crypto} key={crypto.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
