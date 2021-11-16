import { Spinner, Flex } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex
      w="100%"
      height="100vh"
      justify="center"
      bgColor="#f5f5f5"
      align="center"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="pink.900"
        color="#969595"
        size="xl"
      />
    </Flex>
  );
}
