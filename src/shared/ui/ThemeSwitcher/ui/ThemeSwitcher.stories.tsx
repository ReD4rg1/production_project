import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

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
};

export const DarkThemeSwitcher: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
