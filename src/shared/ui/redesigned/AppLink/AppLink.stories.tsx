import type { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "./AppLink";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "@/shared/const/theme";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryAppLink: Story = {
  args: {
    children: "PrimaryAppLink",
    to: "/",
    variant: "primary",
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const SecondaryAppLink: Story = {
  args: {
    children: "SecondaryAppLink",
    to: "/",
    variant: "secondary",
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const DarkPrimaryAppLink: Story = {
  args: {
    children: "DarkPrimaryAppLink",
    to: "/",
    variant: "primary",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkSecondaryAppLink: Story = {
  args: {
    children: "DarkSecondaryAppLink",
    to: "/",
    variant: "secondary",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedPrimaryAppLink: Story = {
  args: {
    children: "RedPrimaryAppLink",
    to: "/",
    variant: "primary",
  },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const RedSecondaryAppLink: Story = {
  args: {
    children: "RedSecondaryAppLink",
    to: "/",
    variant: "secondary",
  },
  decorators: [ThemeDecorator(Theme.RED)],
};
