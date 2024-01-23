import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { NotificationItem } from "./NotificationItem";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "entities/Notification/NotificationItem",
  component: NotificationItem,
  parameters: {
    layout: "centered",
  },
  args: {
    item: {
      id: "1",
      title: "Notification",
      description: "Description",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationItem>;

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
