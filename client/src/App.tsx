import React from "react";
import "./App.css";
import PriceBox from "./components/PriceBox";
import getData from "./utils/getData";

export type TradingInfo = {
  name: string;
  priceUsd: string;
  volumeUsd24Hr: string;
  changePercent24Hr: string;
};

function App() {
  const [data, setData] = React.useState<TradingInfo[]>([]);

  React.useEffect(() => {
    const id = setInterval(() => {
      getData().then(setData);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="App">
      <h1>Cryptocurrency Realtime Price</h1>
      <div className="prices">
        {data.map((crypto) => (
          <PriceBox data={crypto} key={crypto.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
