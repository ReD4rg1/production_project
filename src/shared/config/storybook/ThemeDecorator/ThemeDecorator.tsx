import { Story } from "@storybook/react";
// eslint-disable-next-line d4rg1-fsd-plugin/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/const/theme";

const ThemeDecorator = (theme: Theme) => (Story: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
);

export default ThemeDecorator;
