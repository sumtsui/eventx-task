import { TradingInfo } from "../App";

export function getData() {
  return fetch("http://localhost:4000/tradingInfo").then((res) =>
    res.json()
  ) as Promise<TradingInfo[]>;
}
