import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("load data at every given interval", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("update prices for all crypto currencies");
