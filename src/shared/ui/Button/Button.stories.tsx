import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryNormal: Story = {
  args: {
    children: "PrimaryNormal",
  },
};

export const ClearNormal: Story = {
  args: {
    children: "ClearNormal",
    theme: ThemeButton.CLEAR,
  },
};

export const OutlineNormal: Story = {
  args: {
    children: "OutlineNormal",
    theme: ThemeButton.OUTLINE,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "PrimaryDark",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearDark: Story = {
  args: {
    children: "ClearDark",
    theme: ThemeButton.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDark: Story = {
  args: {
    children: "OutlineDark",
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
