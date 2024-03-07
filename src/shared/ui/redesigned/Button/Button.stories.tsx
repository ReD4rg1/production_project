import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "@/shared/const/theme";

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
    variant: "clear",
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const OutlineNormal: Story = {
  args: {
    children: "OutlineNormal",
    variant: "outline",
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
    variant: "clear",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDark: Story = {
  args: {
    children: "OutlineDark",
    variant: "outline",
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
    variant: "clear",
  },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const OutlineRed: Story = {
  args: {
    children: "OutlineRed",
    variant: "outline",
  },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const SizeM: Story = {
  args: {
    children: "SizeM",
    size: "m",
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const SizeL: Story = {
  args: {
    children: "SizeL",
    size: "l",
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const SizeXL: Story = {
  args: {
    children: "SizeXL",
    size: "xl",
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
