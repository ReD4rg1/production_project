import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ArticleRating from "./ArticleRating";
import storeDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "features/ArticleRating",
  component: ArticleRating,
  parameters: {
    layout: "centered",
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: "GET",
        status: 200,
        response: [],
      },
    ],
  },
  args: {
    articleId: "1",
  },
  decorators: [storeDecorator({})],
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: {},
};

export const NormalThemeWithRating: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: "GET",
        status: 200,
        response: [{ rate: 4 }],
      },
    ],
  },
};

export const DarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED)],
};
