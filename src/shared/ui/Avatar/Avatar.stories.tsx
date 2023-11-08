import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import avatar from "../../../shared/assets/avatar/avatar.png";

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
};

export const Small: Story = {
  args: {
    src: avatar,
    size: 50,
  },
};
