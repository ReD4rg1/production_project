import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

describe("Button", () => {
  test("Test button render", () => {
    render(<Button>{"Button"}</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  test("Test button render with clear theme", () => {
    render(<Button theme={ButtonTheme.CLEAR}>{"Button"}</Button>);
    expect(screen.getByText("Button")).toHaveClass("clear");
  });
});
