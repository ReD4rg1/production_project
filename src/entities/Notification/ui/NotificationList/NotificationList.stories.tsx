import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { NotificationList } from "./NotificationList";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { notificationsMock } from "@/entities/Notification/mocks/data";

const meta = {
  title: "entities/Notification/NotificationList",
  component: NotificationList,
  parameters: {
    layout: "centered",
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: "GET",
        status: 200,
        response: [...notificationsMock],
      },
    ],
  },
  tags: ["autodocs"],
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof NotificationList>;

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
