import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Page } from "./Page";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "shared/Page",
  component: Page,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: { children: <div /> },
  decorators: [StoreDecorator({})],
};

export const DarkTheme: Story = {
  args: { children: <div /> },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const RedTheme: Story = {
  args: { children: <div /> },
  decorators: [ThemeDecorator(Theme.RED), StoreDecorator({})],
};
