## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой (http://localhost:6006):
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "@/shared/const/theme";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryNormal: Story = {
  args: {
    children: "PrimaryNormal",
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const ClearNormal: Story = {
  args: {
    children: "ClearNormal",
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const OutlineNormal: Story = {
  args: {
    children: "OutlineNormal",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.NORMAL)],
};

export const PrimaryDark: Story = {
  args: {
    children: "PrimaryDark",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
```
