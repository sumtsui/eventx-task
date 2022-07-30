// import { mockApiCall } from "./mocks";

export function cacheRequest(expireIn: number, fn: () => Promise<any>) {
  let lastTimeFetch: number = 0;
  let cachedResult: any; // cache in memory for simplicity, can use Redis if cache gets bigger
  return async () => {
    console.log("you want me to call");
    const now = new Date().getTime();
    if (lastTimeFetch + expireIn < now) {
      lastTimeFetch = now;
      cachedResult = await fn();
      return cachedResult;
    } else {
      return cachedResult;
    }
  };
}

// const cachedCall = cacheRequest(5000, () => {
//   // console.log("I actually call");
//   return mockApiCall();
// });

// setInterval(cachedCall, 1000);
