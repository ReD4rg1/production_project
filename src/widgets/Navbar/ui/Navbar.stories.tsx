import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widget/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalNavbar: Story = {
  args: {},
};

export const DarkNavbar: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
