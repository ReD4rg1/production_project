import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RatingCard } from "./RatingCard";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "entities/RatingCard",
  component: RatingCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: {},
};

export const DarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED)],
};
