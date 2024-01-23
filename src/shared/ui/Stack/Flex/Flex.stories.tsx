import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Flex } from "./Flex";
import { Text } from "../../Text/Text";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "shared/Flex",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: { children: <Text title={"NormalTheme"} /> },
};

export const DarkTheme: Story = {
  args: { children: <Text title={"NormalTheme"} /> },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: { children: <Text title={"NormalTheme"} /> },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const NormalThemeGap: Story = {
  args: {
    children: (
      <>
        <Text title={"NormalThemeGap"} />
        <Text title={"NormalThemeGap"} />
        <Text title={"NormalThemeGap"} />
      </>
    ),
    gap: "32",
  },
};
