import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import avatar from "../../../shared/assets/avatar/avatar.png";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    src: avatar,
    size: 150,
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const Small: Story = {
  args: {
    src: avatar,
    size: 50,
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};
