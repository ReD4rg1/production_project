import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AvatarDropdown } from "./AvatarDropdown";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "features/AvatarDropdown",
  component: AvatarDropdown,
  parameters: {
    layout: "centered",
  },
  args: {
    authData: {
      id: "1",
      username: "admin",
      avatar:
        "https://i.kym-cdn.com/entries/icons/original/000/042/690/Screen_Shot_2022-11-16_at_2.24.03_PM.jpg",
    },
  },
  decorators: [StoreDecorator({})],
  tags: ["autodocs"],
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: {},
};

export const DarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED)],
};
