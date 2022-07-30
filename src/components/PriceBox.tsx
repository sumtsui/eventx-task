import React from "react";
import { TradingInfo } from "../App";

function PriceBox({ data }: { data: TradingInfo }) {
  const { name, priceUsd, volumeUsd24Hr, changePercent24Hr } = data;
  return (
    <div className="price-box">
      <h2>{name}</h2>
      <h3>{priceUsd}</h3>
      <div className="details">
        <div className="volume">
          <span>volume:</span>
          <span>{volumeUsd24Hr}</span>
        </div>
        <div className="change">
          <span>change:</span>
          <span>{changePercent24Hr}</span>
        </div>
      </div>
    </div>
  );
}

export default PriceBox;
