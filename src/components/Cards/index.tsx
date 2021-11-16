import {
  Flex,
  Heading,
  Grid,
  GridItem,
  Box,
  Text,
  Button,
  useBreakpointValue,
  SlideFade,
} from "@chakra-ui/react";

import Fade from "react-reveal/Fade";

import { useState, useEffect } from "react";
import Reveal from "react-reveal/Reveal";
import CardEffect from "./CardEffect";
import CardTrainning from "./CardTrainning";
import CardCourses from "./CardCourses";
import CardContract from "./CardContract";
import ButtonCards from "./ButtonCards";
import CardMobile from "./CardMobile";
import ConsultancyIcon from "./CardEffect/ConsultancyIcon";
import IconTrainning from "./CardTrainning/IconTrainning";
import IconCourses from "./CardCourses/IconCourses";
import IconContract from "./CardContract/IconContract";

export default function Cards() {
  const [shouldShowActions, setShouldShowActions] = useState(false);

  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos > 40;

      setShouldShowActions(isScrollingUp);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
    xl: true,
  });

  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <Flex
      as="main"
      flexDir="column"
      mx="auto"
      py={["0", "0", "5rem"]}
      maxW={1400}
      mt={["-5rem", "1rem", "0"]}
      justify="center"
      alignItems="center"
      alignSelf="center"
      h="100%"
    >
      {!isWideVersion ? (
        <>
          <Flex
            textAlign="center"
            mx="auto"
            maxW="380px"
            w="100%"
            justify="center"
            flexDir="column"
            mt={["-0.5rem", "0"]}
          >
            <Fade bottom>
              <Heading mb="3rem" fontFamily="Raleway">
                Como tornamos seus documentos jurídicos{" "}
                <Text color="pink.900" as="span">
                  mais amigáveis
                </Text>
              </Heading>
            </Fade>
            <Flex flexDir="column">
              <Reveal>
                <CardMobile
                  image="consultoriaMobile"
                  title="Consultoria"
                  description="Transformamos seus documentos. Fazemos com que ele seja simples, claro e fácil entender."
                >
                  <ConsultancyIcon />
                </CardMobile>
              </Reveal>
              <Reveal>
                <ButtonCards callToAction="Quero meu contrato" />
              </Reveal>
            </Flex>{" "}
            <Flex mt="3rem" flexDir="column">
              <Reveal>
                <CardMobile
                  image="treinamento-mobile"
                  title="Treinamento"
                  description="Treinamos o seu time para que ele crie documentos amigáveis."
                >
                  <IconTrainning />
                </CardMobile>
              </Reveal>
              <Reveal>
                <ButtonCards callToAction="Quero meu contrato" />
              </Reveal>
            </Flex>
            <Flex mt="3rem" flexDir="column">
              <Reveal>
                <CardMobile
                  image="cursos-mobile"
                  title="Cursos"
                  description="Ensinamos você a criar seu documento em Legal Design do zero."
                >
                  <IconCourses />
                </CardMobile>
              </Reveal>
              <Reveal>
                <ButtonCards callToAction="Quero meu contrato" />
              </Reveal>
            </Flex>
            <Flex mb="3rem" mt="3rem" flexDir="column">
              <Reveal>
                <CardMobile
                  image="contratoautomatico-mobile"
                  title="Contrato automático"
                  description="Automatizamos a criação do seu documento em Legal Design através da nossa plataforma."
                >
                  <IconContract />
                </CardMobile>
              </Reveal>
              <Reveal>
                <ButtonCards callToAction="Quero meu contrato" />
              </Reveal>
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          {shouldShowActions && (
            <>
              <Fade bottom>
                <Heading
                  mb="3rem"
                  mt={["-2rem", "-2rem", "0rem", "2rem"]}
                  textAlign="center"
                  fontFamily="Raleway"
                  fontSize={["30px", "30px", "38px", "42px", "48px"]}
                  maxW={["700px", "700px", "700px", "800px"]}
                >
                  Como tornamos seus documentos jurídicos{" "}
                  <Text as="span" color="pink.900">
                    mais amigáveis
                  </Text>
                </Heading>
              </Fade>
            </>
          )}

          <Flex
            flex="1"
            maxW="1400px"
            mx="auto"
            justify="center"
            align="center"
          >
            <Reveal>
              <Grid
                mt="2rem"
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(4, 1fr)",
                ]}
                w="100%"
                mx="auto"
                maxW={1200}
                justifyContent="center"
                alignItems="center"
                alignSelf="center"
                flexWrap="wrap"
                gap={-100}
              >
                <Reveal>
                  <GridItem mb="2rem">
                    <CardEffect
                      title="Consultoria"
                      description="Transformamos seus documentos. Fazemos com que ele seja simples, claro e fácil entender."
                    />
                    <Flex>
                      <ButtonCards callToAction="Quero que a Bits faça meu documento" />
                    </Flex>
                  </GridItem>
                </Reveal>

                <Reveal>
                  <GridItem mb="2rem">
                    <CardTrainning
                      title="Treinamento"
                      description="Treinamos o seu time para que ele crie documentos amigáveis."
                    />
                    <Flex>
                      <ButtonCards callToAction="Quero que a Bits treine meu time" />
                    </Flex>
                  </GridItem>
                </Reveal>

                <Reveal>
                  <GridItem mb="2rem">
                    <CardCourses
                      title="Cursos"
                      description="Ensinamos você a criar seu documento em Legal Design do zero."
                    />
                    <Flex>
                      <ButtonCards callToAction="Quero me inscrever" />
                    </Flex>
                  </GridItem>
                </Reveal>

                <Reveal>
                  <GridItem mb="2rem">
                    <CardContract
                      title="Contrato automático"
                      description="Automatizamos a criação do seu documento em Legal Design através da nossa plataforma."
                    />
                    <Flex>
                      <ButtonCards callToAction="Começar agora" />
                    </Flex>
                  </GridItem>
                </Reveal>
              </Grid>
            </Reveal>
          </Flex>
        </>
      )}
    </Flex>
  );
}
