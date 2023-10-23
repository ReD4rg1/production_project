import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "shared/ui/Modal/Modal";

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
};
