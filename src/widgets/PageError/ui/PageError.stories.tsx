import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { PageError } from "../ui/PageError";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "widget/PageError",
  component: PageError,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalPageError: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.NORMAL), StoreDecorator({})],
};

export const DarkPageError: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const RedPageError: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED), StoreDecorator({})],
};
