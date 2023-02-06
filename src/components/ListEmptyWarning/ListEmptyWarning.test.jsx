import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import ListEmptyWarning from "./ListEmptyWarning";

const ui = <ListEmptyWarning />;

describe("ListEmptyWarning", () => {
  it("should render correctly", () => {
    render(ui);
    expect(screen.getByText("Try changing the filters or search terms.")).toBeInTheDocument();
    expect(screen.getByText("We can't seem to find what you're looking for.")).toBeInTheDocument();
  });
});
