import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputStyle } from "./Input";
import themeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalInput: Story = {
  args: {
    inputStyle: InputStyle.NORMAL,
  },
};

export const DarkNormalInput: Story = {
  args: {
    inputStyle: InputStyle.NORMAL,
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const NormalInputWithPlaceholder: Story = {
  args: {
    inputStyle: InputStyle.NORMAL,
    placeholder: "NormalInputWithPlaceholder",
  },
};

export const DarkNormalInputWithPlaceholder: Story = {
  args: {
    inputStyle: InputStyle.NORMAL,
    placeholder: "NormalInputWithPlaceholder",
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const ConsoleInput: Story = {
  args: {
    inputStyle: InputStyle.CONSOLE,
  },
};

export const DarkConsoleInput: Story = {
  args: {
    inputStyle: InputStyle.CONSOLE,
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const ConsoleInputWithPlaceholder: Story = {
  args: {
    inputStyle: InputStyle.CONSOLE,
    placeholder: "ConsoleInputWithPlaceholder",
  },
};

export const DarkConsoleInputWithPlaceholder: Story = {
  args: {
    inputStyle: InputStyle.CONSOLE,
    placeholder: "ConsoleInputWithPlaceholder",
  },
  decorators: [themeDecorator(Theme.DARK)],
};
