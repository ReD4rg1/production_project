import { Story } from "@storybook/react";
import { Suspense } from "react";
import { Loader } from "@/shared/ui/deprecated/Loader";

const StyleDecorator = (Story: Story) => (
  <Suspense fallback={<Loader />}>
    <Story />
  </Suspense>
);

export default StyleDecorator;
