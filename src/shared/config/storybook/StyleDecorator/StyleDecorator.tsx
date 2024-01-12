import "@/app/styles/index.scss";
import { Story } from "@storybook/react";

const StyleDecorator = (Story: Story) => (
  <body>
    <Story />
  </body>
);

export default StyleDecorator;
