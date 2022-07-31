import React from "react";
import { render, screen } from "@testing-library/react";
import PriceBox from "../components/PriceBox";
import { mockTradingInfo } from "../utils/mocks";

test("display information", () => {
  render(<PriceBox data={mockTradingInfo[0]} />);
  expect(screen.getByText("Bitcoin")).toBeVisible();
  expect(screen.getByText("14742987655.4557684910221404")).toBeVisible();
});
