import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { CommentList } from "./CommentList";
import { CommentType } from "../../model/types/commentType";
import avatar from "@/shared/assets/avatar/avatar.png";

const meta = {
  title: "entities/CommentList",
  component: CommentList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CommentList>;

const comments: CommentType[] = [
  {
    id: "1",
    text: "Отличная статья",
    articleId: "1",
    user: {
      id: "1",
      username: "JoJo",
      avatar: avatar,
    },
  },
  {
    id: "2",
    text: "Автору респект ♥",
    articleId: "1",
    user: {
      id: "2",
      username: "Graf",
      avatar: avatar,
    },
  },
];

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: { comments },
};

export const DarkTheme: Story = {
  args: { comments },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: { comments },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const NormalThemeWithLoading: Story = {
  args: { comments: [], isLoading: true },
};
