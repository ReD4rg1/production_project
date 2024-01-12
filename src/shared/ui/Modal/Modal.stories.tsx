import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryNormal: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt dolorum odit quam saepe sunt! Accusamus adipisci aperiam at exercitationem expedita facere molestias, natus, nostrum omnis pariatur quam quod, veritatis!",
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const PrimaryDark: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt dolorum odit quam saepe sunt! Accusamus adipisci aperiam at exercitationem expedita facere molestias, natus, nostrum omnis pariatur quam quod, veritatis!",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryRed: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt dolorum odit quam saepe sunt! Accusamus adipisci aperiam at exercitationem expedita facere molestias, natus, nostrum omnis pariatur quam quod, veritatis!",
  },
  decorators: [ThemeDecorator(Theme.RED)],
};
