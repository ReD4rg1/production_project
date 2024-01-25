import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { SortSelector } from "./SortSelector";
import { ArticleSortField } from "@/entities/Article";
import { SortOrder } from "@/shared/types";
import { action } from "@storybook/addon-actions";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "features/SortSelector",
  component: SortSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  sort: ArticleSortField.CREATED,
  order: SortOrder.ASC,
  onChangeOrder: action("onChangeOrder"),
  onChangeSort: action("onChangeSort"),
};

export const NormalTheme: Story = {
  args: { ...args },
};

export const DarkTheme: Story = {
  args: { ...args },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: { ...args },
  decorators: [ThemeDecorator(Theme.RED)],
};
