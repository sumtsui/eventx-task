import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { mockApiCall } from "../utils/mocks";
import useTradingInfo from "../hooks/useTradingInfo";
import * as getData from "../utils/getData";

jest.useFakeTimers();

test("load data and set correct loading state", async () => {
  jest.spyOn(getData, "getData").mockImplementation(mockApiCall);
  const { result } = renderHook(() => useTradingInfo());

  expect(result.current).toEqual({ data: [], error: false, loading: true });

  jest.advanceTimersByTime(1000);
  await waitFor(() => expect(result.current.data).toHaveLength(7));
  await waitFor(() => expect(result.current.loading).toBe(false));
});

test("set correct error state", async () => {
  jest
    .spyOn(getData, "getData")
    .mockImplementation(() => Promise.reject("bad"));
  const { result } = renderHook(() => useTradingInfo());

  expect(result.current).toEqual({ data: [], error: false, loading: true });

  jest.advanceTimersByTime(1000);
  await waitFor(() => expect(result.current.error).toBe(true));
});
