import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import AddCommentForm from "./AddCommentForm";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      addCommentForm: { text: "", error: "" },
    }),
  ],
};

export const DarkTheme: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      addCommentForm: { text: "", error: "" },
    }),
  ],
};

export const RedTheme: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.RED),
    StoreDecorator({
      addCommentForm: { text: "", error: "" },
    }),
  ],
};
