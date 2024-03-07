import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("Test button render", () => {
    render(<Button>{"Button"}</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  test("Test button render with clear theme", () => {
    render(<Button variant={"clear"}>{"Button"}</Button>);
    expect(screen.getByText("Button")).toHaveClass("clear");
  });
});
