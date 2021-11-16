import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Heading, Text, Box, Avatar, VStack } from "@chakra-ui/react";

import Reveal from "react-reveal/Reveal";

export default function SliderTestimonialsDesk() {
  return (
    <Swiper
      slidesPerView={3}
      speed={1200}
      navigation
      pagination={{ clickable: true }}
      style={{ width: "100%", flex: "1" }}
      initialSlide={2}
      modules={[Navigation, Pagination, A11y]}
      containerModifierClass="swiper-testimonials-"
      spaceBetween={-90}
      centeredSlides={true}
      watchSlidesProgress
      breakpoints={{
        "900": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "1400": {
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide>
        {({ isActive }) =>
          isActive ? (
            <Flex
              justify="center"
              align="center"
              flexDir="column"
              w="100%"
              maxW="608px"
              transform="translateY(20px)"
              h="338px"
              mx="auto"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="10px"
                bgColor="pink.900"
                w="100%"
                h="424px"
              >
                <Text color="white" maxW="400px" w="100%" fontSize="16px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  sint blanditiis dolor similique possimus animi numquam
                  deleniti.
                </Text>
              </Box>
              <VStack transform="translateY(-40px)">
                <Avatar size="xl" name="Bits Academy" src="https" />
                <Heading fontSize="16px" fontWeight="700" fontFamily="Raleway">
                  Bits Academy5
                </Heading>
                <Text fontSize="16px" fontWeight="400">
                  Profissão
                </Text>
              </VStack>
            </Flex>
          ) : (
            <Flex
              justify="center"
              align="center"
              flexDir="column"
              w="100%"
              maxW="908px"
              h="438px"
              transform="translateY(70px)"
              opacity="0.15"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="10px"
                w="100%"
                h="424px"
              >
                <Text color="black" maxW="400px" w="100%" fontSize="16px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  sint blanditiis dolor similique possimus animi numquam
                  deleniti.
                </Text>
              </Box>
              <VStack transform="translateY(-40px)">
                <Avatar size="xl" name="Bits Academy" src="https" />
                <Heading fontSize="16px" fontWeight="700" fontFamily="Raleway">
                  Bits Academy
                </Heading>
                <Text fontSize="16px" fontWeight="400">
                  Profissão
                </Text>
              </VStack>
            </Flex>
          )
        }
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) =>
          isActive ? (
            <Flex
              justify="center"
              align="center"
              flexDir="column"
              w="100%"
              maxW="608px"
              transform="translateY(20px)"
              h="338px"
              mx="auto"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="10px"
                bgColor="pink.900"
                w="100%"
                h="424px"
              >
                <Text color="white" maxW="400px" w="100%" fontSize="16px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  sint blanditiis dolor similique possimus animi numquam
                  deleniti.
                </Text>
              </Box>
              <VStack transform="translateY(-40px)">
                <Avatar size="xl" name="Bits Academy" src="https" />
                <Heading fontSize="16px" fontWeight="700" fontFamily="Raleway">
                  Bits Academy5
                </Heading>
                <Text fontSize="16px" fontWeight="400">
                  Profissão
                </Text>
              </VStack>
            </Flex>
          ) : (
            <Flex
              justify="center"
              align="center"
              flexDir="column"
              w="100%"
              maxW="908px"
              h="438px"
              transform="translateY(70px)"
              opacity="0.15"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="10px"
                w="100%"
                h="424px"
              >
                <Text color="black" maxW="400px" w="100%" fontSize="16px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  sint blanditiis dolor similique possimus animi numquam
                  deleniti.
                </Text>
              </Box>
              <VStack transform="translateY(-40px)">
                <Avatar size="xl" name="Bits Academy" src="https" />
                <Heading fontSize="16px" fontWeight="700" fontFamily="Raleway">
                  Bits Academy
                </Heading>
                <Text fontSize="16px" fontWeight="400">
                  Profissão
                </Text>
              </VStack>
            </Flex>
          )
        }
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) =>
          isActive ? (
            <Flex
              justify="center"
              align="center"
              flexDir="column"
              w="100%"
              maxW="608px"
              transform="translateY(20px)"
              h="338px"
              mx="auto"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="10px"
                bgColor="pink.900"
                w="100%"
                h="424px"
              >
                <Text color="white" maxW="400px" w="100%" fontSize="15px">
                  "Curso muito rico e completo para um primeiro passo no mundo
                  do Legal Design, com exemplos práticos, professores
                  atenciosos. Aulas dinâmicas com intuito de despertar o senso
                  crítico do aluno. Com certeza recomendo."
                </Text>
              </Box>
              <VStack transform="translateY(-40px)">
                <Avatar
                  size="xl"
                  name="Bits Academy"
                  src="/images/edivane-liandro.png"
                />
                <Heading fontSize="16px" fontWeight="700" fontFamily="Raleway">
                  Edivane Liandro
                </Heading>
                <Text fontSize="16px" fontWeight="400">
                  Aluna de Legal Design Básico
                </Text>
              </VStack>
            </Flex>
          ) : (
            <Flex
              justify="center"
              align="center"
              flexDir="column"
              w="100%"
              maxW="908px"
              h="438px"
              transform="translateY(70px)"
              opacity="0.15"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="10px"
                w="100%"
                h="424px"
              >
                <Text color="black" maxW="400px" w="100%" fontSize="16px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  sint blanditiis dolor similique possimus animi numquam
                  deleniti.
                </Text>
              </Box>
              <VStack transform="translateY(-40px)">
                <Avatar size="xl" name="Bits Academy" src="https" />
                <Heading fontSize="16px" fontWeight="700" fontFamily="Raleway">
                  Bits Academy
                </Heading>
                <Text fontSize="16px" fontWeight="400">
                  Profissão
                </Text>
              </VStack>
            </Flex>
          )
        }
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) =>
          isActive ? (
            <Flex
              justify="center"
              align="center"
              flexDir="column"
              w="100%"
              maxW="608px"
              transform="translateY(20px)"
              h="338px"
              mx="auto"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="10px"
                bgColor="pink.900"
                w="100%"
                h="424px"
              >
                <Text color="white" maxW="400px" w="100%" fontSize="16px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  sint blanditiis dolor similique possimus animi numquam
                  deleniti.
                </Text>
              </Box>
              <VStack transform="translateY(-40px)">
                <Avatar size="xl" name="Bits Academy" src="https" />
                <Heading fontSize="16px" fontWeight="700" fontFamily="Raleway">
                  Bits Academy
                </Heading>
                <Text fontSize="16px" fontWeight="400">
                  Profissão
                </Text>
              </VStack>
            </Flex>
          ) : (
            <Flex
              justify="center"
              align="center"
              flexDir="column"
              w="100%"
              maxW="908px"
              h="438px"
              transform="translateY(70px)"
              opacity="0.15"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="10px"
                w="100%"
                h="424px"
              >
                <Text color="black" maxW="400px" w="100%" fontSize="16px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  sint blanditiis dolor similique possimus animi numquam
                  deleniti.
                </Text>
              </Box>
              <VStack transform="translateY(-40px)">
                <Avatar size="xl" name="Bits Academy" src="https" />
                <Heading fontSize="16px" fontWeight="700" fontFamily="Raleway">
                  Bits Academy
                </Heading>
                <Text fontSize="16px" fontWeight="400">
                  Profissão
                </Text>
              </VStack>
            </Flex>
          )
        }
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) =>
          isActive ? (
            <Flex
              justify="center"
              align="center"
              flexDir="column"
              w="100%"
              maxW="608px"
              transform="translateY(20px)"
              h="338px"
              mx="auto"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="10px"
                bgColor="pink.900"
                w="100%"
                h="424px"
              >
                <Text color="white" maxW="400px" w="100%" fontSize="16px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  sint blanditiis dolor similique possimus animi numquam
                  deleniti.
                </Text>
              </Box>
              <VStack transform="translateY(-40px)">
                <Avatar size="xl" name="Bits Academy" src="https" />
                <Heading fontSize="16px" fontWeight="700" fontFamily="Raleway">
                  Bits Academy
                </Heading>
                <Text fontSize="16px" fontWeight="400">
                  Profissão
                </Text>
              </VStack>
            </Flex>
          ) : (
            <Flex
              justify="center"
              align="center"
              flexDir="column"
              w="100%"
              maxW="908px"
              h="438px"
              transform="translateY(70px)"
              opacity="0.15"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="10px"
                w="100%"
                h="424px"
              >
                <Text color="black" maxW="400px" w="100%" fontSize="16px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  sint blanditiis dolor similique possimus animi numquam
                  deleniti.
                </Text>
              </Box>
              <VStack transform="translateY(-40px)">
                <Avatar size="xl" name="Bits Academy" src="https" />
                <Heading fontSize="16px" fontWeight="700" fontFamily="Raleway">
                  Bits Academy
                </Heading>
                <Text fontSize="16px" fontWeight="400">
                  Profissão
                </Text>
              </VStack>
            </Flex>
          )
        }
      </SwiperSlide>
    </Swiper>
  );
}
