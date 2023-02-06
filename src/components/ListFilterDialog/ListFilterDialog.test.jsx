import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, it, vi } from "vitest";

import ListFilterDialog from "./ListFilterDialog";

const onClose = vi.fn();
const onClear = vi.fn();
const onApply = vi.fn();
const mockAnchorEl = document.createElement("button");

const ui = (
  <ListFilterDialog
    anchorEl={mockAnchorEl}
    title="Filters title"
    open
    onApply={onApply}
    onClear={onClear}
    onClose={onClose}
  >
    <div>Dialog content</div>
  </ListFilterDialog>
);

describe("ListFilterDialog", () => {
  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });
  it("should render correctly", () => {
    render(ui);
    expect(screen.getByText(/^filters$/i)).toBeInTheDocument();
    expect(screen.getByText(/filters title/i)).toBeInTheDocument();
    expect(screen.getByText(/^clear$/i)).toBeInTheDocument();
    expect(screen.getByText(/dialog content/i)).toBeInTheDocument();
    expect(screen.getByText(/clear all/i)).toBeInTheDocument();
    expect(screen.getByText(/apply/i)).toBeInTheDocument();
  });
  it("should handle Clear click", async () => {
    render(ui);
    await userEvent.click(screen.getByText(/^clear$/i));
    expect(onClear).toHaveBeenCalledTimes(1);
  });
  it("should handle Clear all click", async () => {
    render(ui);
    await userEvent.click(screen.getByText(/clear all/i));
    expect(onClear).toHaveBeenCalledTimes(1);
  });
  it("should handle close click", async () => {
    render(ui);
    await userEvent.click(screen.getByTitle(/close/i));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  it("should handle Apply click", async () => {
    render(ui);
    await userEvent.click(screen.getByText(/apply/i));
    expect(onApply).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  it("should handle Apply click without closing dialog", async () => {
    render(
      <ListFilterDialog
        anchorEl={mockAnchorEl}
        closeOnApply={false}
        title="Filters title"
        open
        onApply={onApply}
        onClear={onClear}
        onClose={onClose}
      >
        <div>Dialog content</div>
      </ListFilterDialog>,
    );
    await userEvent.click(screen.getByText(/apply/i));
    expect(onApply).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);
  });
});
