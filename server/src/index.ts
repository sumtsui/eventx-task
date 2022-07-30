import express from "express";
import { getTradingInfo } from "./services/TradingInfo";
import cors from "cors";
import { mockApiCall } from "./utils/mocks";
import { cacheRequest } from "./utils/cacheRequest";

export type TradingInfo = {
  name: string;
  priceUsd: string;
  volumeUsd24Hr: string;
  changePercent24Hr: string;
};

const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

const cachedGetTradingInfo = cacheRequest(5000, () => {
  console.log("I actually called");
  return mockApiCall();
});

app.get("/tradingInfo", async (req, res) => {
  // const result = await getTradingInfo();
  const result = await cachedGetTradingInfo();
  res.send({ data: result });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
