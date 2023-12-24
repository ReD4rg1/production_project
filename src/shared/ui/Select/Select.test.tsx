import { render, screen } from "@testing-library/react";
import { Select } from "./Select";

describe("Select", () => {
  test("Test select render", () => {
    render(<Select label={"Select"} />);
    expect(screen.getByText("Select")).toBeInTheDocument();
  });
});
