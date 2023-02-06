import { renderHook } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import { describe, it } from "vitest";

import useVisibility from "./useVisibility";

describe("useVisibility hook", () => {
  it("should set visibility to 'true' with 'show' callback", () => {
    const { result } = renderHook(() => useVisibility());
    act(() => {
      result.current.show();
    });
    expect(result.current.visibility).toBe(true);
  });
  it("should set visibility to 'false' with 'hide' callback", () => {
    const { result } = renderHook(() => useVisibility(true));
    act(() => {
      result.current.hide();
    });
    expect(result.current.visibility).toBe(false);
  });
  it("should toggle visibility  with 'toggle' callback", () => {
    const { result } = renderHook(() => useVisibility());
    act(() => {
      result.current.toggle();
    });
    expect(result.current.visibility).toBe(true);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.visibility).toBe(false);
  });
});
