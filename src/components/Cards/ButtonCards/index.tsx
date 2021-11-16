import { Button } from "@chakra-ui/react";
import { MotionButton } from "../../../shared/styles/animation";
import Reveal from "react-reveal/Reveal";

interface callToActionProps {
  callToAction: string;
}

export default function ButtonCards({ callToAction }: callToActionProps) {
  return (
    <>
      <MotionButton
        w="264px"
        h="50px"
        mt={["2rem", "2rem", "0"]}
        fontFamily="Roboto"
        fontWeight="700"
        fontSize="14px"
        bgColor="pink.900"
        color="white"
        mx="auto"
        _focus={{ border: "none" }}
        _hover={{
          bgColor: "#fff",
          color: "pink.900",
          border: "1px solid #CC3366",
        }}
        whileTap={{ scale: 1.04 }}
        whileHover={{ scale: 1.04 }}
      >
        {callToAction}
      </MotionButton>
    </>
  );
}
