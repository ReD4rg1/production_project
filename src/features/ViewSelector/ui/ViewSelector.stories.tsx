import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { ViewSelector } from "./ViewSelector";
import { ArticleView } from "@/entities/Article";

const meta = {
  title: "features/ViewSelector",
  component: ViewSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: { view: ArticleView.GRID },
};

export const DarkTheme: Story = {
  args: { view: ArticleView.GRID },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: { view: ArticleView.GRID },
  decorators: [ThemeDecorator(Theme.RED)],
};
