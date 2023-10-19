import "app/styles/index.scss";
import { Story } from "@storybook/react";

const StyleDecorator = (Story: Story) => (
  <div>
    <Story />
  </div>
);

export default StyleDecorator;
