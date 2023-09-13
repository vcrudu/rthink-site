import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Header from "./Header";

test("home", () => {
  render(<Header />);
  expect(screen.getByText("R-Think")).toBeDefined();
});
