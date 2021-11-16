import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  Box,
  VStack,
  Avatar,
} from "@chakra-ui/react";

import Fade from "react-reveal/Fade";

export default function SliderTestimonialsMobile() {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ width: "100%", flex: "1" }}
      initialSlide={2}
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={5}
      centeredSlides={true}
      watchSlidesProgress
    >
      <SwiperSlide>
        <Flex
          justify="center"
          align="center"
          flexDir="column"
          w="100%"
          px="2rem"
          maxW="608px"
          h={["478px", "478px", "438px"]}
          mx="auto"
          mt="-2rem"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
            bgColor="pink.900"
            w="100%"
            h="255px"
          >
            <Text
              color="white"
              maxW="400px"
              w="100%"
              fontSize={["15px", "15px", "16px"]}
              textAlign="center"
              px={["20px", "20px", "0"]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              sint blanditiis dolor similique possimus animi numquam deleniti.
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
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          justify="center"
          align="center"
          flexDir="column"
          w="100%"
          px="2rem"
          maxW="608px"
          transform="translateY(20px)"
          h="438px"
          mx="auto"
          mt="-1rem"
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
            <Text
              color="white"
              maxW="400px"
              w="100%"
              fontSize={["15px", "15px", "16px"]}
              textAlign="center"
              px={["20px", "20px", "0"]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              sint blanditiis dolor similique possimus animi numquam deleniti.
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
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          justify="center"
          align="center"
          flexDir="column"
          w="100%"
          px="2rem"
          maxW="608px"
          transform="translateY(20px)"
          h="438px"
          mx="auto"
          mt="-1rem"
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
            <Text
              color="white"
              maxW="400px"
              w="100%"
              fontSize={["15px", "15px", "16px"]}
              textAlign="center"
              px={["20px", "20px", "0"]}
            >
              "Curso muito rico e completo para um primeiro passo no mundo do
              Legal Design, com exemplos práticos, professores atenciosos. Aulas
              dinâmicas com intuito de despertar o senso crítico do aluno. Com
              certeza recomendo."
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
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          justify="center"
          align="center"
          flexDir="column"
          w="100%"
          px="2rem"
          maxW="608px"
          transform="translateY(20px)"
          h="438px"
          mx="auto"
          mt="-1rem"
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
            <Text
              color="white"
              maxW="400px"
              w="100%"
              fontSize={["15px", "15px", "16px"]}
              textAlign="center"
              px={["20px", "20px", "0"]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              sint blanditiis dolor similique possimus animi numquam deleniti.
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
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          justify="center"
          align="center"
          flexDir="column"
          w="100%"
          px="2rem"
          maxW="608px"
          transform="translateY(20px)"
          h="438px"
          mx="auto"
          mt="-1rem"
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
            <Text
              color="white"
              maxW="400px"
              w="100%"
              fontSize={["15px", "15px", "16px"]}
              textAlign="center"
              px={["20px", "20px", "0"]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              sint blanditiis dolor similique possimus animi numquam deleniti.
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
      </SwiperSlide>
    </Swiper>
  );
}
