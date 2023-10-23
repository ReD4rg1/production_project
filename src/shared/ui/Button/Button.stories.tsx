import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";
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
    theme: ButtonTheme.CLEAR,
  },
};

export const OutlineNormal: Story = {
  args: {
    children: "OutlineNormal",
    theme: ButtonTheme.OUTLINE,
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
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDark: Story = {
  args: {
    children: "OutlineDark",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeM: Story = {
  args: {
    children: "SizeM",
    size: ButtonSize.M,
  },
};

export const SizeL: Story = {
  args: {
    children: "SizeL",
    size: ButtonSize.L,
  },
};

export const SizeXL: Story = {
  args: {
    children: "SizeXL",
    size: ButtonSize.XL,
  },
};
