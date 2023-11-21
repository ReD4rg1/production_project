import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Code } from "./Code";

const meta = {
  title: "shared/Code",
  component: Code,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = {
  text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
};

export const NormalTheme: Story = {
  args: data,
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const DarkTheme: Story = {
  args: data,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: data,
  decorators: [ThemeDecorator(Theme.RED)],
};
