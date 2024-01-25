import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "widget/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalSidebar: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const DarkSidebar: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedSidebar: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED)],
};
