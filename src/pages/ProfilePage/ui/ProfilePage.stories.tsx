import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfilePage from "./index";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import avatar from "@/shared/assets/avatar/avatar.png";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfilePage>;

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
  args: {},
  decorators: [
    ThemeDecorator(Theme.NORMAL),
    StoreDecorator({ profile: { form: data } }),
  ],
};

export const DarkTheme: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ profile: { form: data } }),
  ],
};

export const RedTheme: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.RED),
    StoreDecorator({ profile: { form: data } }),
  ],
};
