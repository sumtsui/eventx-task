import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { mockApiCall, mockTradingInfo } from "../utils/mocks";

jest.useFakeTimers();
jest.mock("../utils/getData", () => {
  return {
    getData: () => mockApiCall(),
  };
});

test("display crypto info", async () => {
  render(<App />);
  expect(screen.getByText("Cryptocurrency Realtime Price")).toBeVisible();
  jest.advanceTimersByTime(1000);
  for (const info of mockTradingInfo) {
    expect(await screen.findByText(info.name)).toBeVisible();
  }
});
