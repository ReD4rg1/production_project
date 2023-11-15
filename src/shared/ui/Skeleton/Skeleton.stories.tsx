import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Skeleton } from "./Skeleton";

const meta = {
  title: "shared/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: { width: 100, height: 200 },
};

export const DarkTheme: Story = {
  args: { width: 100, height: 200 },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: { width: 100, height: 200 },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const NormalThemeCircle: Story = {
  args: { border: "50%", width: 100, height: 100 },
};

export const DarkThemeCircle: Story = {
  args: { border: "50%", width: 100, height: 100 },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedThemeCircle: Story = {
  args: { border: "50%", width: 100, height: 100 },
  decorators: [ThemeDecorator(Theme.RED)],
};
