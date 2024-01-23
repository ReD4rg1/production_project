import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleRecommendationsList } from "./ArticleRecommendationsList";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { articleMock } from "@/entities/Article/mocks/data";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "features/ArticleRecommendationsList",
  component: ArticleRecommendationsList,
  parameters: {
    layout: "centered",
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: "GET",
        status: 200,
        response: [
          { ...articleMock },
          { ...articleMock, id: 2 },
          { ...articleMock, id: 3 },
        ],
      },
    ],
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};

export const DarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const RedTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED), StoreDecorator({})],
};
