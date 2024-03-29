import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleListItem } from "./ArticleListItem";
import { articleMock } from "../../mocks/data";
import { ArticleView } from "../../model/consts/article";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "entities/ArticleListItem",
  component: ArticleListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: {
    article: articleMock,
    view: ArticleView.GRID,
  },
};

export const DarkTheme: Story = {
  args: {
    article: articleMock,
    view: ArticleView.GRID,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: {
    article: articleMock,
    view: ArticleView.GRID,
  },
  decorators: [ThemeDecorator(Theme.RED)],
};
