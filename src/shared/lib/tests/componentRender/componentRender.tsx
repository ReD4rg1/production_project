import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTest from "@/shared/config/i18n/i18nForTest";
import { MemoryRouter } from "react-router-dom";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { Theme } from "@/shared/const/theme";
// eslint-disable-next-line d4rg1-fsd-plugin/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
// eslint-disable-next-line d4rg1-fsd-plugin/layer-imports
import "@/app/styles/index.scss";

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  theme?: Theme;
}

interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
  const { children, options = {} } = props;
  const { route = "/", theme = Theme.DARK } = options;
  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        asyncReducers={options.asyncReducers}
        initialState={options.initialState}
      >
        <I18nextProvider i18n={i18nForTest}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {}
) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
