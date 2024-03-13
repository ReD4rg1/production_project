import { Flex, FlexProps } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction">;

export const VStack = (props: VStackProps) => {
  const { align = "start", max = true } = props;

  return <Flex direction={"column"} align={align} max={max} {...props} />;
};
