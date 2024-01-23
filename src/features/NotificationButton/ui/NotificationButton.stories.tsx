import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { NotificationButton } from "./NotificationButton";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "features/NotificationButton",
  component: NotificationButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationButton>;

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
