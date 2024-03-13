import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Text } from "./Text";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "shared/redesigned/Text",
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
  decorators: [ThemeDecorator(Theme.NORMAL)],
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
  decorators: [ThemeDecorator(Theme.NORMAL)],
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
  decorators: [ThemeDecorator(Theme.NORMAL)],
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
    variant: "error",
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const DarkTitleTextError: Story = {
  args: {
    title: "TitleDark",
    text: "TextDark",
    variant: "error",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTitleTextError: Story = {
  args: {
    title: "TitleRed",
    text: "TextRed",
    variant: "error",
  },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const TextSizeM: Story = {
  args: {
    title: "TitleSizeM",
    text: "TitleSizeM",
    size: "m",
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const TextSizeL: Story = {
  args: {
    title: "TitleSizeL",
    text: "TitleSizeL",
    size: "l",
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const TextSizeXL: Story = {
  args: {
    title: "TitleSizeXL",
    text: "TitleSizeXL",
    size: "xl",
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};
