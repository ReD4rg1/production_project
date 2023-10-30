import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "shared/ui/Text/Text";

const meta = {
  title: "shared/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextNormal: Story = {
  args: {
    text: "TextNormal",
  },
};

export const TextDark: Story = {
  args: {
    text: "TextDark",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TitleNormal: Story = {
  args: {
    title: "TitleNormal",
  },
};

export const TitleDark: Story = {
  args: {
    title: "TitleDark",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TitleTextNormal: Story = {
  args: {
    title: "TitleNormal",
    text: "TextNormal",
  },
};

export const TitleTextDark: Story = {
  args: {
    title: "TitleDark",
    text: "TextDark",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TitleTextError: Story = {
  args: {
    title: "TitleDark",
    text: "TextDark",
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
