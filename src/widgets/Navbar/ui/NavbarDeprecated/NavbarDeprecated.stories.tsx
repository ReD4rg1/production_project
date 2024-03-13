import type { Meta, StoryObj } from "@storybook/react";
import { NavbarDeprecated } from "./NavbarDeprecated";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "widget/NavbarDeprecated",
  component: NavbarDeprecated,
  parameters: {
    layout: "centered",
  },
  args: {
    authData: { id: "1", username: "admin" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavbarDeprecated>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalNavbar: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.NORMAL),
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
  decorators: [ThemeDecorator(Theme.NORMAL), StoreDecorator({})],
};

export const DarkUnAuthorizationNavbar: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const RedUnAuthorizationNavbar: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED), StoreDecorator({})],
};
