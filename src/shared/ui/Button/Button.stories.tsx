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
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const ClearNormal: Story = {
  args: {
    children: "ClearNormal",
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const OutlineNormal: Story = {
  args: {
    children: "OutlineNormal",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
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

export const PrimaryRed: Story = {
  args: {
    children: "PrimaryRed",
  },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const ClearRed: Story = {
  args: {
    children: "ClearRed",
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const OutlineRed: Story = {
  args: {
    children: "OutlineRed",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const SizeM: Story = {
  args: {
    children: "SizeM",
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const SizeL: Story = {
  args: {
    children: "SizeL",
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const SizeXL: Story = {
  args: {
    children: "SizeXL",
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const DisabledNormal: Story = {
  args: {
    children: "DisabledNormal",
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const DisabledDark: Story = {
  args: {
    children: "DisabledDark",
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DisabledRed: Story = {
  args: {
    children: "DisabledRed",
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.RED)],
};
