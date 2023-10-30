import type { Meta, StoryObj } from "@storybook/react";
import themeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { LoginForm } from "./LoginForm";
import storeDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalLoginForm: Story = {
  args: {},
  decorators: [
    storeDecorator({
      loginForm: { username: "123", password: "123" },
    }),
  ],
};

export const DarkLoginForm: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.DARK),
    storeDecorator({
      loginForm: { username: "123", password: "123" },
    }),
  ],
};

export const NormalWithErrorLoginForm: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.DARK),
    storeDecorator({
      loginForm: { error: "ERROR" },
    }),
  ],
};

export const NormalWithLoadingLoginForm: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.DARK),
    storeDecorator({
      loginForm: { isLoading: true },
    }),
  ],
};
