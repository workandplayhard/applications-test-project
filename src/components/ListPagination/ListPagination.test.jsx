import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, vi } from "vitest";

import ListPagination from "./ListPagination";

const onPageChange = vi.fn();
const ui = <ListPagination count={15} page={1} onPageChange={onPageChange} />;

describe("ListPagination", () => {
  afterEach(() => {
    vi.resetAllMocks();
    cleanup();
  });
  it("should render correctly", async () => {
    render(ui);
    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText(/go to page/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(1)).toBeInTheDocument();
  });
  it("should handle click on pagintion button", async () => {
    render(ui);
    await userEvent.click(screen.getByText("2"));
    expect(onPageChange).toHaveBeenCalledTimes(1);
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
  it("should change with page selector", async () => {
    render(ui);
    const select = document.getElementById("mui-component-select-page-select");
    await userEvent.click(select);
    await userEvent.click(within(screen.getByRole("presentation")).getByText("2"));
    expect(onPageChange).toHaveBeenCalledTimes(1);
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
