import { TradingInfo } from "../App";

function getData() {
  return fetch("http://localhost:4000/tradingInfo")
    .then((res) => res.json())
    .then((res) => res.data) as Promise<TradingInfo[]>;
}

export default getData;
