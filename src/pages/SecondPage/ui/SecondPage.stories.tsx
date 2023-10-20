import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import SecondPage from "pages/SecondPage/ui/index";

const meta = {
  title: "pages/SecondPage",
  component: SecondPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SecondPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalLoader: Story = {
  args: {},
};

export const DarkLoader: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
