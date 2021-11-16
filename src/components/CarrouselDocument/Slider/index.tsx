import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Heading, Text, useBreakpointValue, Box } from "@chakra-ui/react";
import Reveal from "react-reveal/Reveal";
import { title } from "process";

interface DataProps {
  data: Documents[];
}

interface Documents {
  title: string;
  image: string;
}
const data = [
  {
    title: "Contrato de prestação de serviços",
    image: "contrato-prestacao-servico",
  },
  {
    title: "Contrato de procuração",
    image: "contrato-procuracao",
  },
  {
    title: "Códigos",
    image: "contrato-etica",
  },
  {
    title: "Políticas",
    image: "politica-cookies",
  },
  {
    title: "Política de privacidade",
    image: "politica-privacidade",
  },
];

export default function Slider() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    xl: true,
  });

  return (
    <Swiper
      speed={1100}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ width: "100%", flex: "1" }}
      initialSlide={2}
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={-10}
      centeredSlides={true}
      watchSlidesProgress
      breakpoints={{
        "380px": {
          slidesPerView: 1,
        },

        "812px": {
          slidesPerView: 1,
        },

        "1024": {
          slidesPerView: 3,
          spaceBetween: 0,
        },

        "1100": {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
    >
      {data.map((docs) => (
        <SwiperSlide>
          {({ isActive }) =>
            isActive ? (
              <Flex
                ml="auto"
                w="100%"
                bgImage={`url('/images/${docs.image}.png')`}
                bgSize="cover"
                bgRepeat="no-repeat"
                maxW={["300px", "300px", "320px"]}
                h={["400px", "400px", "450px", "450px"]}
                align="center"
                justify="center"
                direction="column"
                mt="1rem"
                bgColor="red"
                mx="auto"
                boxShadow="2xl"
              >
                <Heading
                  fontSize="20px"
                  fontFamily="Raleway"
                  fontWeight="700"
                  textAlign="center"
                  mt="35rem"
                >
                  {docs.title}
                </Heading>
              </Flex>
            ) : (
              <Flex
                w="100%"
                maxW={["200px", "220x", "240px"]}
                bgImage={`url('/images/${docs.image}.png')`}
                bgSize="cover"
                bgRepeat="no-repeat"
                h={["400px", "400px", "450px", "360px"]}
                align="center"
                justify="center"
                direction="column"
                mt={["0", "0", "3rem"]}
                bgColor="pink.900"
                mx="auto"
                position="relative"
                boxShadow="md"
              >
                <Box
                  position="absolute"
                  w="100%"
                  h="100%"
                  opacity="0.8"
                  bgColor="pink.900"
                ></Box>
                <Text fontSize="14px" mt="27rem">
                  {docs.title}
                </Text>
              </Flex>
            )
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
