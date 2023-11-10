import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

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
    theme: AppLinkTheme.PRIMARY,
  },
};

export const SecondaryAppLink: Story = {
  args: {
    children: "SecondaryAppLink",
    to: "/",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const DarkPrimaryAppLink: Story = {
  args: {
    children: "DarkPrimaryAppLink",
    to: "/",
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkSecondaryAppLink: Story = {
  args: {
    children: "DarkSecondaryAppLink",
    to: "/",
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedPrimaryAppLink: Story = {
  args: {
    children: "RedPrimaryAppLink",
    to: "/",
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.RED)],
};

export const RedSecondaryAppLink: Story = {
  args: {
    children: "RedSecondaryAppLink",
    to: "/",
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.RED)],
};
