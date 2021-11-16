import { Heading } from "@chakra-ui/react";

interface HeadingGlobalProps {
  title: string;
}

export default function HeadingGlobal({ title, ...rest }: HeadingGlobalProps) {
  return (
    <Heading
      mt={["-2rem", "-2rem", "0", "0", "2.5rem"]}
      ml={["0", "0", "0", "0", "2.7rem"]}
      textAlign={["center", "center", "center", "left", "left"]}
      fontFamily="Raleway"
      mb="2rem"
      flex="1"
      fontSize={["30px", "30px", "38px", "42px", "48px"]}
      {...rest}
    >
      {" "}
      {title}{" "}
    </Heading>
  );
}
