import { Heading, Flex, useBreakpointValue, Text } from "@chakra-ui/react";
import Slider from "./Slider";
import SliderMobile from "./SliderMobile";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

export default function CarrouselDocument() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
    xl: true,
  });
  return (
    <>
      {isWideVersion ? (
        <>
          <Flex
            justify="center"
            flexDir="column"
            w="100%"
            h="800px"
            maxW={1250}
            mx="auto"
            align="center"
            mb="4rem"
            overflowX="hidden"
          >
            <Fade bottom>
              <Heading
                fontFamily="Raleway"
                fontWeight="600"
                fontSize={["30px", "32px", "38px", "42px", "48px"]}
                textAlign={["center", "center", "center", "center", "center"]}
                maxW={["320px", "320px", "500px", "500px", "1000px"]}
                mt={["2rem", "2rem", "2rem", "2rem", "2rem"]}
                w="100%"
                mb={["1rem", "1rem", "0rem"]}
                py="3rem"
              >
                Os tipos de{" "}
                <Text color="pink.900" as="span">
                  documentos
                </Text>
              </Heading>
            </Fade>

            <Slider />
          </Flex>
        </>
      ) : (
        <>
          <Reveal>
            <Flex
              mx="auto"
              maxW="460px"
              justify="center"
              align="center"
              flexDir="column"
              h="700px"
              py="1.5rem"
            >
              <Fade bottom>
                <Heading
                  fontFamily="Raleway"
                  fontWeight="600"
                  fontSize={["30px", "32px"]}
                  textAlign={["center", "center"]}
                  maxW={["320px", "320px"]}
                  w="100%"
                  mb={["1rem", "1rem", "1rem"]}
                >
                  Os tipos de{" "}
                  <Text as="span" color="pink.900">
                    documentos
                  </Text>
                </Heading>
              </Fade>

              <SliderMobile />
            </Flex>
          </Reveal>
        </>
      )}
    </>
  );
}
