import React from "react";
import "./App.css";
import PriceBox from "./components/PriceBox";
import { mockTradingInfo } from "./utils/mockData";

export type TradingInfo = {
  name: string;
  priceUsd: string;
  volumeUsd24Hr: string;
  changePercent24Hr: string;
};

function App() {
  const [data, setData] = React.useState<TradingInfo[]>(mockTradingInfo);

  return (
    <div className="App">
      <h1>Cryptocurrency Realtime Price</h1>
      <div className="prices">
        {data.map((crypto) => (
          <PriceBox data={crypto} />
        ))}
      </div>
    </div>
  );
}

export default App;
