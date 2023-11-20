import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";

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

export const TextRed: Story = {
  args: {
    text: "TextRed",
  },
  decorators: [ThemeDecorator(Theme.RED)],
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

export const TitleRed: Story = {
  args: {
    title: "TitleRed",
  },
  decorators: [ThemeDecorator(Theme.RED)],
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

export const TitleTextRed: Story = {
  args: {
    title: "TitleRed",
    text: "TextRed",
  },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const TitleTextError: Story = {
  args: {
    title: "TitleNormal",
    text: "TextNormal",
    theme: TextTheme.ERROR,
  },
};

export const DarkTitleTextError: Story = {
  args: {
    title: "TitleDark",
    text: "TextDark",
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTitleTextError: Story = {
  args: {
    title: "TitleRed",
    text: "TextRed",
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const TextSizeM: Story = {
  args: {
    title: "TitleSizeM",
    text: "TitleSizeM",
    size: TextSize.M,
  },
};

export const TextSizeL: Story = {
  args: {
    title: "TitleSizeL",
    text: "TitleSizeL",
    size: TextSize.L,
  },
};

export const TextSizeXL: Story = {
  args: {
    title: "TitleSizeXL",
    text: "TitleSizeXL",
    size: TextSize.XL,
  },
};
