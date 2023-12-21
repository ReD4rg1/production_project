import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Tabs, TabsProps } from "./Tabs";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "shared/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: TabsProps = {
  value: "selected",
  onTabClick: action("onTabClick"),
  tabs: [
    {
      content: <div>{"Content"}</div>,
      value: "Content",
    },
    {
      content: <div>{"Selected"}</div>,
      value: "selected",
    },
  ],
};

export const NormalTheme: Story = {
  args: { ...args },
};

export const DarkTheme: Story = {
  args: { ...args },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: { ...args },
  decorators: [ThemeDecorator(Theme.RED)],
};
