import type { Meta, StoryObj } from "@storybook/react";
import themeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import LoginForm from "./LoginForm";
import storeDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

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
    themeDecorator(Theme.NORMAL),
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

export const RedLoginForm: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.RED),
    storeDecorator({
      loginForm: { username: "123", password: "123" },
    }),
  ],
};

export const NormalWithErrorLoginForm: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.NORMAL),
    storeDecorator({
      loginForm: { error: "ERROR" },
    }),
  ],
};

export const DarkWithErrorLoginForm: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.DARK),
    storeDecorator({
      loginForm: { error: "ERROR" },
    }),
  ],
};

export const RedWithErrorLoginForm: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.RED),
    storeDecorator({
      loginForm: { error: "ERROR" },
    }),
  ],
};

export const NormalWithLoadingLoginForm: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.NORMAL),
    storeDecorator({
      loginForm: { isLoading: true },
    }),
  ],
};

export const DarkWithLoadingLoginForm: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.DARK),
    storeDecorator({
      loginForm: { isLoading: true },
    }),
  ],
};

export const RedWithLoadingLoginForm: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.RED),
    storeDecorator({
      loginForm: { isLoading: true },
    }),
  ],
};
