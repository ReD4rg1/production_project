import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageError } from "widgets/PageError";

const meta = {
  title: "widget/PageError",
  component: PageError,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalPageError: Story = {
  args: {},
};

export const DarkPageError: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
