import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "shared/ui/Select/Select";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    label: "Normal",
    options: [
      { value: "1", content: "1" },
      { value: "2", content: "2" },
    ],
  },
};

export const Dark: Story = {
  args: {
    label: "Normal",
    options: [
      { value: "1", content: "1" },
      { value: "2", content: "2" },
    ],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
