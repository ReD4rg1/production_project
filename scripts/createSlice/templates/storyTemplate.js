module.exports = (
  layer,
  componentName
) => `import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ${componentName} } from "./${componentName}";

const meta = {
  title: "${layer}/${componentName}",
  component: ${componentName},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTheme: Story = {
  args: {},
};

export const DarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.RED)],
};
`;
