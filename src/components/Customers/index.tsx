import HeadingGlobal from "../../shared/components/HeadingGlobal";
import {
  Flex,
  Text,
  Grid,
  GridItem,
  Box,
  Icon,
  useBreakpointValue,
  Heading,
  Image,
} from "@chakra-ui/react";

import {
  MotionGrid,
  MotionGridItem,
  animationFlex,
  itemAnimation,
} from "../../shared/styles/animation";

import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

import { useState } from "react";

interface CustomerProps {
  description: string;
  image: string;
}

interface CustomerData {
  customers: CustomerProps[];
}

const dataCustomers = [
  {
    description: "abc",
    image: "2wenergia",
  },
  {
    description: "def",
    image: "alliance",
  },
  {
    description: "ghi",
    image: "amil",
  },
  {
    description: "rst",
    image: "arcelor-mittal",
  },
  {
    description: "",
    image: "background-brasil",
  },
  {
    description: "",
    image: "bndes",
  },
  {
    description: "",
    image: "brasil-prev",
  },
  {
    description: "",
    image: "carrefour-banco",
  },
  {
    description: "",
    image: "carrefour",
  },
  {
    description: "",
    image: "chesf",
  },
  {
    description: "",
    image: "cogna",
  },
  {
    description: "",
    image: "cyrela",
  },
  {
    description: "",
    image: "dasa",
  },
  {
    description: "",
    image: "department-for-digital",
  },
  {
    description: "",
    image: "energisa",
  },
  {
    description: "",
    image: "equatorial",
  },
  {
    description: "",
    image: "ericsson",
  },
  {
    description: "",
    image: "fgv",
  },
  {
    description: "",
    image: "globo",
  },

  {
    description: "",
    image: "ifood",
  },
  {
    description: "",
    image: "kraft-heinz",
  },
  {
    description: "",
    image: "lobby",
  },
  {
    description: "",
    image: "lobo-rizzo",
  },
  {
    description: "",
    image: "mattos-filho",
  },
  {
    description: "",
    image: "max-milhas",
  },
  {
    description: "",
    image: "mercedes-benz",
  },
  {
    description: "",
    image: "mrv",
  },
];

const InitialState =
  "Cada um de nossos clientes contrata um serviço diferente. Clique na logo de um cliente para saber o trabalho que realizamos para eles para que você entenda o que podemos fazer por você!";

export default function Customers() {
  const [descriptionCustomer, setDescriptionCustomer] = useState(InitialState);

  function changeDescription(description) {
    setDescriptionCustomer(description);
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
    xl: true,
  });

  return (
    <Flex
      h="100%"
      w="100%"
      maxW={1400}
      mx="auto"
      px={["1rem", "5rem"]}
      justify="space-around"
      flexDir={["column", "column", "column", "column"]}
      py="1rem"
      mt="-1.5rem"
    >
      <Flex
        mx="auto"
        align="center"
        justify="center"
        flexDir={["column", "column", "column", "row"]}
        maxW={["280px", "280px", "1400px"]}
      >
        {!isWideVersion ? (
          <>
            <Fade bottom>
              <Heading
                textAlign="center"
                fontFamily="Raleway"
                fontWeight="700"
                mt="2rem"
                fontSize="30px"
              >
                Quem já transformou seus documentos com a{" "}
                <Text as="span" color="pink.900">
                  Bits
                </Text>
              </Heading>
            </Fade>

            <Fade bottom>
              <Text
                mt="2rem"
                maxW={["260px", "360px", "400px"]}
                w="100%"
                h="auto"
                textAlign="center"
                fontSize="15px"
                fontWeight="400"
              >
                {descriptionCustomer}
              </Text>
            </Fade>
          </>
        ) : (
          <>
            <Fade bottom>
              <Heading
                mt={["-2rem", "-2rem", "0", "0", "2.5rem"]}
                ml={["0", "0", "0", "0", "2.7rem"]}
                textAlign={["center", "center", "center", "left", "left"]}
                fontFamily="Raleway"
                mb="2rem"
                flex="1"
                fontSize={["30px", "30px", "38px", "42px", "48px"]}
              >
                Quem já transformou seus documentos com a{" "}
                <Text color="pink.900" as="span">
                  Bits
                </Text>
              </Heading>
            </Fade>
            <Fade bottom>
              <Text
                w={["300px", "350px", "400px", "500px", "640px"]}
                mx={["0", "0", "0", "1rem"]}
                textAlign={["center", "center", "center", "left"]}
                fontSize="16px"
                px={["0", "0", "0", "0", "2.5rem"]}
              >
                {descriptionCustomer}
              </Text>
            </Fade>
          </>
        )}
      </Flex>

      <Reveal>
        <MotionGrid
          mt="1rem"
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
            "repeat(6, 1fr)",
          ]}
          gap={["0.2rem", "0.2rem", "0rem"]}
          initial="hidden"
          animate="visible"
          variants={animationFlex}
        >
          {dataCustomers.map((docs) => (
            <MotionGridItem
              variants={itemAnimation}
              initial="hidden"
              animate="visible"
            >
              <Box
                cursor="pointer"
                display="flex"
                alignItems="center"
                alignContent="center"
                justifyContent="center"
                w={["100%", "100%"]}
                h="120px"
                onClick={() => changeDescription(docs.description)}
              >
                <Image w="100px" h="auto" src={`/images/${docs.image}.svg`} />
              </Box>
            </MotionGridItem>
          ))}
        </MotionGrid>
      </Reveal>
    </Flex>
  );
}
