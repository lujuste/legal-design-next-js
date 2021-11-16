import {
  Flex,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import SliderTestimonialsMobile from "./SliderTestimonialMobile";
import SliderTestimonialsDesk from "./SliderTestimonialsDesk";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

export default function Testimonials() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });

  return (
    <>
      <Flex
        py={["5rem", "1rem", "1rem", "1rem", "1rem"]}
        w="100%"
        maxW={1480}
        h={["800px", "800px", "900px"]}
        mx="auto"
        justify="center"
        flexDir="column"
      >
        <VStack>
          <Fade bottom>
            <Heading
              fontFamily="Raleway"
              fontWeight="600"
              fontSize={["30px", "32px", "38px", "42px", "48px"]}
              maxW={["320px", "320px", "500px", "500px", "750px"]}
              textAlign="center"
              mt={["0rem", "0rem", "-2rem", "2rem", "0rem"]}
              w="100%"
              mb={["3rem", "3rem", "5rem"]}
            >
              <Text textAlign="center" as="span" color="pink.900">
                Depoimentos
              </Text>{" "}
              de quem já fez Legal Design com a gente
            </Heading>
          </Fade>
        </VStack>
        {isWideVersion ? (
          <Reveal>
            <SliderTestimonialsDesk />
          </Reveal>
        ) : (
          <Reveal>
            <SliderTestimonialsMobile />
          </Reveal>
        )}
      </Flex>
    </>
  );
}
