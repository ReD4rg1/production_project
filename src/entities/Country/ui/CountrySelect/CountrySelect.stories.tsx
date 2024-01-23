import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CountrySelect } from "./CountrySelect";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "entities/CountrySelect",
  component: CountrySelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalCountrySelect: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const DarkCountrySelect: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedCountrySelect: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED)],
};
