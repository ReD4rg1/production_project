import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Card } from "./Card";
import { Text } from "../Text/Text";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "shared/redesigned/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: { children: <Text title={"NormalTheme"} /> },
};

export const DarkTheme: Story = {
  args: { children: <Text title={"DarkTheme"} /> },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: { children: <Text title={"RedTheme"} /> },
  decorators: [ThemeDecorator(Theme.RED)],
};
