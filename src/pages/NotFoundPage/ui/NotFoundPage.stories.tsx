import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { NotFoundPage } from "pages/NotFoundPage";

const meta = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalLoader: Story = {
  args: {},
};

export const DarkLoader: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};