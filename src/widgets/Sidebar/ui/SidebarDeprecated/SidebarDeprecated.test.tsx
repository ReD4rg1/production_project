import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";
import { SidebarDeprecated } from "../SidebarDeprecated/SidebarDeprecated";

describe("Sidebar", () => {
  test("Test sidebar render", () => {
    componentRender(<SidebarDeprecated />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("Test sidebar toggle", () => {
    componentRender(<SidebarDeprecated />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
