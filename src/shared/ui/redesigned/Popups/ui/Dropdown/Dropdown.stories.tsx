import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Dropdown } from "./Dropdown";
import { Button } from "../../../../redesigned/Button/Button";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "shared/redesigned/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  trigger: <Button>{"Open"}</Button>,
  items: [
    {
      content: "first",
    },

    {
      content: "second",
    },
    {
      content: "third",
    },
  ],
};

export const NormalTheme: Story = {
  args,
};

export const DarkTheme: Story = {
  args,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args,
  decorators: [ThemeDecorator(Theme.RED)],
};
