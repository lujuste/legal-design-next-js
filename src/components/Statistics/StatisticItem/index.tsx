import { Heading, Text, Flex } from "@chakra-ui/react";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";

interface StatisticItemProps {
  description: string;
  number: number;
}

export default function StatisticItem({
  description,
  number,
}: StatisticItemProps) {
  return (
    <>
      <Fade bottom>
        <Flex flexDir="column" textAlign="center">
          <Heading
            fontFamily="Raleway"
            fontWeight="600"
            fontSize="48px"
            color="white"
            mb="0.5rem"
          >
            <CountUp end={number} duration={30} />
          </Heading>
          <Text
            color="white"
            textAlign="center"
            maxW="200px"
            w="100%"
            fontSize="16px"
            lineHeight="24px"
          >
            {" "}
            {description}{" "}
          </Text>
        </Flex>
      </Fade>
    </>
  );
}
