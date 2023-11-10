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

export const DarkInput: Story = {
  args: {
    inputStyle: InputStyle.NORMAL,
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const RedInput: Story = {
  args: {
    inputStyle: InputStyle.NORMAL,
  },
  decorators: [themeDecorator(Theme.RED)],
};

export const NormalInputWithPlaceholder: Story = {
  args: {
    inputStyle: InputStyle.NORMAL,
    placeholder: "NormalInputWithPlaceholder",
  },
};

export const DarkInputWithPlaceholder: Story = {
  args: {
    inputStyle: InputStyle.NORMAL,
    placeholder: "DarkInputWithPlaceholder",
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const RedInputWithPlaceholder: Story = {
  args: {
    inputStyle: InputStyle.NORMAL,
    placeholder: "RedInputWithPlaceholder",
  },
  decorators: [themeDecorator(Theme.RED)],
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

export const RedConsoleInput: Story = {
  args: {
    inputStyle: InputStyle.CONSOLE,
  },
  decorators: [themeDecorator(Theme.RED)],
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
    placeholder: "DarkConsoleInputWithPlaceholder",
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const RedConsoleInputWithPlaceholder: Story = {
  args: {
    inputStyle: InputStyle.CONSOLE,
    placeholder: "RedConsoleInputWithPlaceholder",
  },
  decorators: [themeDecorator(Theme.DARK)],
};
