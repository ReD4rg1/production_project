import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AvatarDropdown } from "./AvatarDropdown";

const meta = {
  title: "shared/AvatarDropdown",
  component: AvatarDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AvatarDropdown>;

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
