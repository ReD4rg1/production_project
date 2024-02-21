import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Popover } from "./Popover";
import { Theme } from "@/shared/const/theme";

const children = (
  <div>
    <div>{"1"}</div>
    <div>{"2"}</div>
    <div>{"3"}</div>
  </div>
);

const meta = {
  title: "shared/Popups/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  args: {
    children,
    trigger: <div>{"trigger"}</div>,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: {},
};

export const DarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED)],
};
