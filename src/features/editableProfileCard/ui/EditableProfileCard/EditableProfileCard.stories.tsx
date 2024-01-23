import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { EditableProfileCard } from "./EditableProfileCard";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "features/EditableProfileCard",
  component: EditableProfileCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EditableProfileCard>;

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
