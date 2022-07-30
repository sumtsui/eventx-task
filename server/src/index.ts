import express from "express";
import { getTradingInfo } from "./services/TradingInfo";
import cors from "cors";
import { mockApiCall } from "./utils/mocks";

const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/tradingInfo", async (req, res) => {
  console.log("-- called --");
  // const result = await getTradingInfo();
  const result = await mockApiCall();
  res.send({ data: result });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
