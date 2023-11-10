import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { CurrencySelect } from "./CurrencySelect";

const meta = {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalCurrencySelect: Story = {
  args: {},
};

export const DarkCurrencySelect: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedCurrencySelect: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED)],
};
