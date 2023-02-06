import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import Layout from "./Layout.jsx";

const ui = <Layout />;
const headerContent =
  "We plan to connect you with your favorite software. If there’s an app you’d love to integrate with us, let us know and we’ll notify you as soon as it’s available!";

describe("Layout", () => {
  it("should render correctly", () => {
    render(ui);
    expect(screen.getByText("Integrations")).toBeInTheDocument();
    expect(screen.getByText(headerContent)).toBeInTheDocument();
  });
});
