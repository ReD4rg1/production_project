import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { MainPage } from "pages/MainPage";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalLoader: Story = {
  args: {},
};

export const DarkLoader: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
