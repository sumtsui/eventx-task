import fetch from "node-fetch";

export function getTradingInfo() {
  return fetch(
    "https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,litecoin,monero,xrp,dogecoin,dash"
  )
    .then((res) => res.json())
    .catch(() => new Error("ERROR_GET_DATA"));
}
