import { TradingInfo } from "../App";

export const mockTradingInfo = [
  {
    name: "Bitcoin",
    volumeUsd24Hr: "14742987655.4557684910221404",
    changePercent24Hr: "-0.8942249965716775",
    priceUsd: "23786.1164371941225847",
  },
  {
    name: "Ethereum",
    volumeUsd24Hr: "10816288330.5044404130420495",
    changePercent24Hr: "-1.2536279864344527",
    priceUsd: "1706.8217928788630316",
  },
  {
    name: "XRP",
    volumeUsd24Hr: "498533197.5728669143135392",
    changePercent24Hr: "-2.1456830472513537",
    priceUsd: "0.3672426810545189",
  },
  {
    name: "Dogecoin",
    volumeUsd24Hr: "215812984.7880378919504063",
    changePercent24Hr: "-3.2622028065315211",
    priceUsd: "0.0689325445894476",
  },
  {
    name: "Litecoin",
    volumeUsd24Hr: "210059253.9809819307311515",
    changePercent24Hr: "-4.0890906547898585",
    priceUsd: "61.1132428360555834",
  },
  {
    name: "Monero",
    volumeUsd24Hr: "63709750.0030652566488660",
    changePercent24Hr: "-2.0116179346056981",
    priceUsd: "160.6295744253426260",
  },
  {
    name: "Dash",
    volumeUsd24Hr: "47682910.0228472336090727",
    changePercent24Hr: "-5.0318666622971098",
    priceUsd: "51.1940376615057531",
  },
];

export const mockApiCall = (timeout?: number): Promise<TradingInfo[]> => {
  // return Promise.reject("bad");
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          mockTradingInfo.map((info) => ({
            ...info,
            priceUsd: info.priceUsd + Math.random() * 10,
          }))
        ),
      timeout ?? 200
    );
  });
};
