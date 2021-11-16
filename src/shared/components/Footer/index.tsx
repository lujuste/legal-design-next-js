import {
  Flex,
  Grid,
  GridItem,
  Text,
  Button,
  List,
  ListItem,
  Heading,
  useBreakpointValue,
  Divider,
  Image,
} from "@chakra-ui/react";
import IconCall from "./icons/IconCall";
import IconMail from "./icons/IconMail";
import { Input } from "../Form/Input";
import LocationIcon from "./icons/LocationIcon";
import IconInstagram from "./icons/IconInstagram";
import IconFacebook from "./icons/IconFacebook";
import IconLinkedin from "./icons/IconLinkedin";

import Fade from "react-reveal/Fade";

import Reveal from "react-reveal/Reveal";
export default function Footer() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    xl: true,
  });

  return (
    <>
      <Flex
        as="footer"
        w="100%"
        h={["100%", "100%", "100%", "396px"]}
        bgColor="pink.900"
        mt={["-2rem", "-2rem", "-3rem"]}
        mx="auto"
        justify="center"
        align="center"
        alignItems="center"
      >
        {isWideVersion ? (
          <>
            <Reveal>
              <Flex
                maxW={1400}
                h="100%"
                w="100%"
                mx="auto"
                alignItems="center"
                flexDir="column"
                justify="center"
                align="center"
              >
                <Reveal>
                  <Grid
                    mx="2rem"
                    h="80%"
                    py="2rem"
                    templateColumns="repeat(4, 1fr)"
                    gap={20}
                  >
                    <Flex justify="space-around" flexDir="column">
                      <Fade bottom>
                        <Image
                          src="/images/logo-bits-branco.svg"
                          w="100px"
                          h="40px"
                        />
                      </Fade>
                      <Text color="white">Saiba onde nos encontrar</Text>
                      <Flex>
                        <LocationIcon />
                        <Text ml="10px" color="white">
                          R.Fidêncio Ramos, 101, <br />
                          Vila Olímpia, São Paulo/SP <br />
                        </Text>
                      </Flex>

                      <Flex>
                        <IconMail />
                        <Text ml="10px" color="white">
                          contato@bitsacademy.com.br{" "}
                        </Text>
                      </Flex>

                      <Flex>
                        <IconCall />
                        <Text ml="10px" color="white">
                          +55 11 98425-9825
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex
                      justify={["center", "center", "space-around"]}
                      flexDir="column"
                    >
                      <List color="white">
                        <ListItem
                          fontFamily="Raleway"
                          fontWeight="700"
                          mb="1rem"
                        >
                          Serviços
                        </ListItem>
                        <ListItem mb="1rem">Consultorias</ListItem>
                        <ListItem mb="1rem">Treinamentos</ListItem>
                        <ListItem mb="1rem">Cursos</ListItem>
                        <ListItem mb="1rem">App</ListItem>
                        <ListItem mb="1rem">Contrato Automático</ListItem>
                      </List>
                    </Flex>
                    <GridItem>
                      <List color="white">
                        <ListItem
                          mb="1rem"
                          fontFamily="Raleway"
                          fontWeight="700"
                        >
                          Outros
                        </ListItem>
                        <ListItem mb="1rem">Blog</ListItem>
                        <ListItem mb="1rem">Política de privacidade</ListItem>
                      </List>
                    </GridItem>
                    <GridItem>
                      <Flex flexDir="column">
                        <Text
                          as="h4"
                          fontSize="16px"
                          fontFamily="Raleway"
                          fontWeight="700"
                          color="white"
                          mb="1rem"
                        >
                          {" "}
                          Inscreva-se em nossa newsletter{" "}
                        </Text>
                        <Input
                          mb="0.5rem"
                          id="email"
                          name="email"
                          type="email"
                          label="Seu email"
                        />
                        <Button
                          mb="1rem"
                          border="solid 1px #fff"
                          color="#fff"
                          h="45px"
                          bgColor="pink.900"
                          _hover={{ bgColor: "green.900" }}
                        >
                          Enviar
                        </Button>
                      </Flex>

                      <Flex maxW="100px" w="100%" justify="space-between">
                        <IconInstagram />
                        <IconFacebook />
                        <IconLinkedin />
                      </Flex>
                    </GridItem>
                  </Grid>
                </Reveal>
                <Flex
                  justify="center"
                  alignItems="center"
                  align="center"
                  mx="auto"
                >
                  <Reveal>
                    <Text color="#ffffff">
                      Copyright © 2021 Bits Academy. All rights reserved. CNPJ
                      nº 35.070.508/0001-40.
                    </Text>
                  </Reveal>
                </Flex>
              </Flex>
            </Reveal>
          </>
        ) : (
          <Flex
            maxW={780}
            px="2rem"
            h="100%"
            w="100%"
            mx="auto"
            flexDir={["column"]}
          >
            <Fade bottom>
              <Image
                src="/images/logo-bits-branco.svg"
                w="60px"
                h="28px"
                mt="3rem"
                mb="2rem"
              />
            </Fade>

            <Flex>
              <LocationIcon />
              <Text ml="10px" color="white">
                R.Fidêncio Ramos, 101, <br />
                Vila Olímpia, São Paulo/SP <br />
              </Text>
            </Flex>

            <Flex mt="1rem">
              <IconMail />
              <Text ml="10px" color="white">
                contato@bitsacademy.com.br{" "}
              </Text>
            </Flex>

            <Flex mt="1rem">
              <IconCall />
              <Text ml="10px" color="white">
                +55 11 98425-9825
              </Text>
            </Flex>

            <Flex mt="1.5rem" justify="space-between">
              <Flex flexDir="column">
                <Heading
                  mb="0.5rem"
                  fontFamily="Raleway"
                  color="white"
                  fontSize="16px"
                >
                  Serviços
                </Heading>
                <Divider
                  color="white"
                  size="10px"
                  mb="0.5rem"
                  orientation="horizontal"
                />
                <List color="white">
                  <ListItem>Consultoria</ListItem>
                  <ListItem>Treinamentos</ListItem>
                  <ListItem>Cursos</ListItem>
                  <ListItem>App</ListItem>
                  <ListItem>Contrato automática</ListItem>
                </List>
              </Flex>
              <Flex flexDir="column">
                <Heading
                  mb="0.5rem"
                  fontFamily="Raleway"
                  color="white"
                  fontSize="16px"
                >
                  Outros
                </Heading>
                <Divider
                  color="white"
                  size="10px"
                  mb="0.5rem"
                  orientation="horizontal"
                />
                <List color="white">
                  <ListItem>Blog</ListItem>
                  <ListItem>Política de privacidade</ListItem>
                </List>
              </Flex>
            </Flex>
            <Flex flexDir="column">
              <Heading
                mt="1.5rem"
                fontFamily="Raleway"
                color="white"
                fontSize="16px"
                mb="1rem"
              >
                Inscreva-se em nossa newsletter
              </Heading>
              <Input
                mb="0.5rem"
                id="email"
                name="email"
                type="email"
                label="Seu email"
                h="60px"
              />
              <Button
                h="60px"
                mb="1rem"
                border="1px solid #fff"
                bgColor="pink.900"
                color="white"
                _hover={{ bgColor: "green.900" }}
              >
                Enviar
              </Button>
            </Flex>
            <Flex
              mx="auto"
              maxW="100px"
              w="100%"
              justifyContent="space-between"
            >
              <IconInstagram />
              <IconFacebook />
              <IconLinkedin />
            </Flex>
            <Flex mt={["2rem"]} maxW="300px" w="100%" color="white" mx="auto">
              <Text
                mb={["2rem", "2rem", "0"]}
                fontSize="16px"
                textAlign="center"
              >
                Copyright © 2021 Bits Academy. All rights reserved. CNPJ nº
                35.070.508/0001-40.
              </Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
}
