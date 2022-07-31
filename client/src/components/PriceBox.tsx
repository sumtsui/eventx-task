import React from "react";
import { TradingInfo } from "../App";
import "./PriceBox.css";

function PriceBox({ data }: { data: TradingInfo }) {
  const { name, priceUsd, volumeUsd24Hr, changePercent24Hr } = data;

  const change = Number(changePercent24Hr) > 0 ? "up" : "down";

  return (
    <div className="price-box">
      <h2 className="name">{name}</h2>
      <h3 className="price">{priceUsd}</h3>
      <div className="details">
        <div className="volume">
          <div>volume:</div>
          <div>{volumeUsd24Hr}</div>
        </div>
        <div className={"change " + change}>
          <div>change:</div>
          <div className="value">{changePercent24Hr}</div>
        </div>
      </div>
    </div>
  );
}

export default PriceBox;
