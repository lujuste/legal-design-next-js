import {
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import { HTMLChakraProps } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import { NextPage } from "next";

import BoxDocument from "./FloatBoxItems/BoxDocument";
import BoxPerson from "./FloatBoxItems/BoxPerson";
import BoxTime from "./FloatBoxItems/BoxTime";
import BoxPersonOutline from "./FloatBoxItems/BoxPersonOutline";
import FloatWhatsapp from "./FloatWhatsapp";
import GroupContract from "./GroupContract";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionFlexProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

export const MotionFlex: NextPage<MotionFlexProps> = motion(Flex);

import { MotionButton } from "../../shared/styles/animation";

export default function HomeScreen(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    xl: true,
  });

  return (
    <>
      <Flex
        w="100%"
        h={["100%", "100%", "100%", "100%", "90vh"]}
        bgImage="url('/images/bgPink.png') "
        bgSize="cover"
        bgRepeat="no-repeat"
        zIndex="-999"
      >
        <Flex
          zIndex="0"
          maxW={1400}
          h={["100%", "100%", "100%", "100%", "100vh"]}
          w="100%"
          mx="auto"
          px="1rem"
          mt={["3rem", "3rem", "3rem", "6rem", "3rem"]}
          py="2rem"
          justify="center"
          align="center"
          flexDir={["column", "column", "column", "column", "row"]}
          overflowX="hidden"
        >
          <Flex
            flexDir="column"
            justify="center"
            align="center"
            w="100vh"
            maxW={["600px", "600px", "600px", "600px", "600px"]}
            h="100%"
            ml={["0rem", "0rem", "0rem", "0.5rem"]}
          >
            <Fade bottom>
              <Heading
                fontFamily="Raleway"
                fontWeight="600"
                fontSize={["30px", "32px", "38px", "42px", "48px"]}
                textAlign={["center", "center", "center", "center", "left"]}
                maxW={["270px", "320px", "500px", "500px", "500px"]}
                mt={["2rem", "2rem", "2rem", "2rem", "-2rem"]}
                w="100%"
              >
                Documentos em{" "}
                <Text color="pink.900" as="span">
                  Legal Design
                </Text>{" "}
                geram resultados melhores
              </Heading>
              <Text
                mt={["0.5rem", "2rem"]}
                lineHeight="24px"
                fontWeight="normal"
                maxW={["270px", "320px", "500px", "500px", "500px"]}
                fontSize={["15px", "15px", "16px", "16px", "16px"]}
                textAlign={["center", "center", "center", "center", "left"]}
              >
                Entender um documento jurídico pode ser uma tarefa muito
                complexa. Com o Legal Design, além de tornar a comunicação mais
                fácil, você gera mais vendas, aumenta a satisfação dos clientes,
                elimina a burocracia, evita inadimplemento e torna melhor a
                experiência do usuário.
              </Text>
            </Fade>

            <Fade bottom>
              <MotionButton
                mt={["2rem", "2rem"]}
                mr={["0", "0", "0", "0", "17rem"]}
                w="231px"
                h="50px"
                bgColor="pink.900"
                color="#FFF"
                fontSize={["14px", "14px", "15px"]}
                _hover={{
                  bgColor: "#fff",
                  color: "pink.900",
                  border: "1px solid #CC3366",
                }}
                _active={{
                  bgColor: "#fff",
                  color: "pink.900",
                  border: "1px solid #CC3366",
                }}
                whileHover={{ scale: 1.02, boxShadow: "inherit" }}
              >
                Quero aplicar o Legal Design
              </MotionButton>
            </Fade>
          </Flex>
          <Flex
            flexDir="row-reverse"
            align="center"
            justify="center"
            w="100%"
            h="100%"
            fleWrap="wrap"
            flex="1"
            mt={["-3rem", "2.5rem", "4rem", "4rem", "-2rem"]}
          >
            <Flex
              ml={["-3rem", "0", "0", "0", "4rem"]}
              maxW={["500px", "500px", "500px", "500px", "600px"]}
            >
              <Reveal>
                <Flex
                  position="relative"
                  maxW={["250px", "290px", "600px"]}
                  w="100%"
                  h="auto"
                >
                  <Icon position="absolute" as={GroupContract} />
                </Flex>
              </Reveal>
            </Flex>
            <Flex
              ml={["1rem", "1rem", "3rem", "2rem", "-1rem"]}
              justify="space-around"
              flexDir="column"
            >
              <Reveal>
                <BoxPersonOutline />
                <BoxDocument />
                <BoxPerson />
                <BoxTime />
              </Reveal>
            </Flex>
          </Flex>
        </Flex>
        {isWideVersion && (
          <MotionFlex
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 0.9, opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeIn" }}
            position="fixed"
            right="0"
            top={["90vh"]}
            zIndex="100000"
          >
            <FloatWhatsapp />
          </MotionFlex>
        )}
      </Flex>
    </>
  );
}
