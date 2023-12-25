import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ListBox, ListBoxItem } from "./ListBox";

const initial: ListBoxItem[] = [
  { value: "1", content: "Durward Reynolds", disabled: false },
  { value: "2", content: "Kenton Towne", disabled: false },
  { value: "3", content: "Therese Wunsch", disabled: false },
  { value: "4", content: "Benedict Kessler", disabled: true },
  { value: "5", content: "Katelyn Rohan", disabled: false },
];

const meta = {
  title: "shared/ListBox",
  component: ListBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: { items: initial },
};

export const DarkTheme: Story = {
  args: { items: initial },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: { items: initial },
  decorators: [ThemeDecorator(Theme.RED)],
};
