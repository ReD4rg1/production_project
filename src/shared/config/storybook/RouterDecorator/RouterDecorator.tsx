import { Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

const RouterDecorator = (Story: Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

export default RouterDecorator;
