import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ArticleList } from "./ArticleList";
import { articleMock } from "../../mocks/data";
import { ArticleView } from "../../model/consts/article";

const meta = {
  title: "entities/ArticleList",
  component: ArticleList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  articleMock,
  articleMock,
  articleMock,
  articleMock,
  articleMock,
  articleMock,
  articleMock,
  articleMock,
];

export const NormalTheme: Story = {
  args: {
    articles: data,
    view: ArticleView.LIST,
  },
};

export const DarkTheme: Story = {
  args: {
    articles: data,
    view: ArticleView.LIST,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: {
    articles: data,
    view: ArticleView.LIST,
  },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const NormalThemeIsLoading: Story = {
  args: {
    articles: data,
    isLoading: true,
    view: ArticleView.LIST,
  },
};

export const NormalThemeGrid: Story = {
  args: {
    articles: data,
    view: ArticleView.GRID,
  },
};
