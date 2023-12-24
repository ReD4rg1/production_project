import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ArticleDetails } from "./ArticleDetails";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { articleMock } from "../../mocks/data";

const meta = {
  title: "entities/ArticleDetails",
  component: ArticleDetails,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: { id: "1" },
  decorators: [
    ThemeDecorator(Theme.NORMAL),
    StoreDecorator({ articleDetails: { data: articleMock } }),
  ],
};

export const DarkTheme: Story = {
  args: { id: "1" },
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ articleDetails: { data: articleMock } }),
  ],
};

export const RedTheme: Story = {
  args: { id: "1" },
  decorators: [
    ThemeDecorator(Theme.RED),
    StoreDecorator({ articleDetails: { data: articleMock } }),
  ],
};

export const NormalThemeIsLoading: Story = {
  args: { id: "1" },
  decorators: [
    ThemeDecorator(Theme.NORMAL),
    StoreDecorator({ articleDetails: { isLoading: true } }),
  ],
};

export const NormalThemeWithError: Story = {
  args: { id: "1" },
  decorators: [
    ThemeDecorator(Theme.NORMAL),
    StoreDecorator({
      articleDetails: { error: "Произошла непредвиденная ошибка" },
    }),
  ],
};
