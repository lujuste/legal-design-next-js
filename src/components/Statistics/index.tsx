import { Flex } from "@chakra-ui/react";
import StatisticItem from "./StatisticItem";
import Reveal from "react-reveal/Reveal";

export default function Statistics() {
  return (
    <>
      <Reveal>
        <Flex
          as="section"
          align="center"
          mx="auto"
          w="100%"
          h={["600px", "600px", "300px"]}
          bgColor="pink.900"
        >
          <Flex
            as="main"
            w="100%"
            flexDir={["column", "column", "row"]}
            justify={["space-evenly", "space-evenly", "space-around"]}
            align="center"
            maxW={1400}
            h="100%"
            mx="auto"
            mt={["-1rem", "-1rem", "1rem", "1rem", "1rem"]}
          >
            <StatisticItem
              number={2000}
              description="Documentos com Legal Design"
            />

            <StatisticItem
              number={1000}
              description="empresas mudaram os seus documentos para Legal Design"
            />
            <StatisticItem
              number={3000}
              description="pessoas fizeram o curso de Legal Design"
            />
          </Flex>
        </Flex>
      </Reveal>
    </>
  );
}
