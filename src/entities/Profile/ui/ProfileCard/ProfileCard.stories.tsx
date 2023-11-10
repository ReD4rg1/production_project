import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ProfileCard } from "./index";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import avatar from "shared/assets/avatar/avatar.png";

const meta = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = {
  first: "Kirill",
  lastname: "Musenov",
  age: 21,
  currency: Currency.KZT,
  country: Country.Kazakhstan,
  city: "Ust-Kamenogorsk",
  username: "admin",
  avatar: avatar,
};

export const NormalTheme: Story = {
  args: { data: data },
};

export const DarkTheme: Story = {
  args: { data: data },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const NormalReadonly: Story = {
  args: { data: data, readonly: true },
};

export const DarkReadonly: Story = {
  args: { data: data, readonly: true },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const NormalWithError: Story = {
  args: { error: "error" },
};

export const DarkWithError: Story = {
  args: { error: "error" },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const NormalLoading: Story = {
  args: { isLoading: true },
};

export const DarkLoading: Story = {
  args: { isLoading: true },
  decorators: [ThemeDecorator(Theme.DARK)],
};
