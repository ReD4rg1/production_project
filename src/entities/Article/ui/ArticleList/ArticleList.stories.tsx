import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ArticleList } from "./ArticleList";
import { articleMock } from "entities/Article/mocks/data";

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

export const NormalTheme: Story = {
  args: {
    articles: [
      articleMock,
      articleMock,
      articleMock,
      articleMock,
      articleMock,
      articleMock,
      articleMock,
      articleMock,
    ],
  },
};

export const DarkTheme: Story = {
  args: {
    articles: [
      articleMock,
      articleMock,
      articleMock,
      articleMock,
      articleMock,
      articleMock,
      articleMock,
      articleMock,
    ],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: {
    articles: [
      articleMock,
      articleMock,
      articleMock,
      articleMock,
      articleMock,
      articleMock,
      articleMock,
      articleMock,
    ],
  },
  decorators: [ThemeDecorator(Theme.RED)],
};