import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "shared/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalThemeSwitcher: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const DarkThemeSwitcher: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedThemeSwitcher: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED)],
};
