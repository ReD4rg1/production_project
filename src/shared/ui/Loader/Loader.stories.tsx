import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalLoader: Story = {
  args: {},
};

export const DarkLoader: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
