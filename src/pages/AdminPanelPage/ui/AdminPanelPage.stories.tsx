import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import AdminPanelPage from "./AdminPanelPage";

const meta = {
  title: "pages/AdminPanelPage",
  component: AdminPanelPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AdminPanelPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.NORMAL), StoreDecorator({})],
};

export const DarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const RedTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED), StoreDecorator({})],
};
