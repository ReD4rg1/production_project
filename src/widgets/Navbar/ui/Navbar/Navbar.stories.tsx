import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "widget/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalNavbar: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: { authData: { id: "1", username: "admin" } },
    }),
  ],
};

export const DarkNavbar: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: { authData: { id: "1", username: "admin" } },
    }),
  ],
};

export const RedNavbar: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.RED),
    StoreDecorator({
      user: { authData: { id: "1", username: "admin" } },
    }),
  ],
};

export const NormalUnAuthorizationNavbar: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};

export const DarkUnAuthorizationNavbar: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const RedUnAuthorizationNavbar: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED), StoreDecorator({})],
};
