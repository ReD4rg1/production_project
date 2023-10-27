import type { Meta, StoryObj } from "@storybook/react";
import themeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { LoginForm } from "./LoginForm";

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
};

export const DarkLoginForm: Story = {
  args: {},
  decorators: [themeDecorator(Theme.DARK)],
};
