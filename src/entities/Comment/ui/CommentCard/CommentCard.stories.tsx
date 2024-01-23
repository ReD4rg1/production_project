import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CommentCard } from "./CommentCard";
import { CommentType } from "../../model/types/commentType";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "entities/CommentCard",
  component: CommentCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const comment: CommentType = {
  id: "3",
  text: "some comment 3",
  articleId: "1",
  user: {
    id: "1",
    username: "admin",
    avatar: "",
  },
};

export const NormalTheme: Story = {
  args: { comment },
};

export const DarkTheme: Story = {
  args: { comment },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: { comment },
  decorators: [ThemeDecorator(Theme.RED)],
};
