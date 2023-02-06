import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import PaginationInfo from "./PaginationInfo";

const ui = <PaginationInfo count={25} page={2} />;

describe("PaginationInfo", () => {
  it("should render correctly", () => {
    render(ui);
    expect(screen.getByTestId("pagination-info")).toHaveTextContent(/showing 11-20 - of 25 apps/i);
  });
});
