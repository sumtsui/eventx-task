import React from "react";
import { TradingInfo } from "../App";
import "./PriceBox.css";

function PriceBox({ data }: { data: TradingInfo }) {
  const { name, priceUsd, volumeUsd24Hr, changePercent24Hr } = data;
  return (
    <div className="price-box">
      <h2>{name}</h2>
      <h3>{priceUsd}</h3>
      <div className="details">
        <div className="volume">
          <div>volume:</div>
          <div>{volumeUsd24Hr}</div>
        </div>
        <div className="change">
          <div>change:</div>
          <div>{changePercent24Hr}</div>
        </div>
      </div>
    </div>
  );
}

export default PriceBox;
