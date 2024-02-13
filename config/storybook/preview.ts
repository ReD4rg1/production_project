import type { Preview } from "@storybook/react";
import "app/styles/index.scss";
import StyleDecorator from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import ThemeDecorator from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import RouterDecorator from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import SuspenseDecorator from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import { Theme } from "@/shared/const/theme";
import StoreDecorator from "../../src/shared/config/storybook/StoreDecorator/StoreDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.NORMAL),
    RouterDecorator,
    SuspenseDecorator,
    StoreDecorator({ user: {} }),
  ],
};

export default preview;
