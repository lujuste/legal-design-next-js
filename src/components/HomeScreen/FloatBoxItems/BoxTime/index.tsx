import { Flex, HTMLChakraProps } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import { NextPage } from "next";

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionFlexProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

export const MotionFlex: NextPage<MotionFlexProps> = motion(Flex);

export default function BoxTime() {
  return (
    <MotionFlex
      mt={["3rem", "5rem"]}
      w={["2rem", "50px", "60px", "60px", "70px"]}
      h={["2rem", "50px", "60px", "60px", "70px"]}
      px="0.2rem"
      bgColor="white"
      textAlign="center"
      borderRadius={["5px", "15px"]}
      boxShadow="2xl"
      justifyContent="center"
      alignItems="center"
      transform={[
        "translateX(40px) ",
        "translateX(60px) ",
        "translateX(5px)",
        "translateX(5px)",
        "translateX(10px)",
      ]}
      animate={{
        y: [30, 4, 0, -10],
        x: [0, 35],
        scale: [1, 1, 1, 1, 1],
        rotate: [0, 0, 0, 0, 0],
        borderRadius: ["20%", "20%", "20", "20%", "20%"],
      }}
      transition={{
        duration: 14,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
        delay: 2,
      }}
    >
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.21875 22.5C4.21875 12.4069 12.4069 4.21875 22.5 4.21875C32.5931 4.21875 40.7812 12.4069 40.7812 22.5C40.7812 32.5931 32.5931 40.7812 22.5 40.7812C12.4069 40.7812 4.21875 32.5931 4.21875 22.5ZM22.5 7.03125C13.9602 7.03125 7.03125 13.9602 7.03125 22.5C7.03125 31.0398 13.9602 37.9688 22.5 37.9688C31.0398 37.9688 37.9688 31.0398 37.9688 22.5C37.9688 13.9602 31.0398 7.03125 22.5 7.03125Z"
          fill="url(#paint0_linear_9586:15075)"
          fill-opacity="0.8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.5 9.84375C23.2767 9.84375 23.9062 10.4733 23.9062 11.25V22.5H30.9375C31.7142 22.5 32.3438 23.1296 32.3438 23.9062C32.3438 24.6829 31.7142 25.3125 30.9375 25.3125H22.5C21.7233 25.3125 21.0938 24.6829 21.0938 23.9062V11.25C21.0938 10.4733 21.7233 9.84375 22.5 9.84375Z"
          fill="url(#paint1_linear_9586:15075)"
          fill-opacity="0.8"
        />
        <defs>
          <linearGradient
            id="paint0_linear_9586:15075"
            x1="22.5"
            y1="4.21875"
            x2="22.5"
            y2="40.7812"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CC3366" />
            <stop offset="0.703125" stop-color="#F05B91" />
            <stop offset="1" stop-color="#FF6CA3" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_9586:15075"
            x1="26.7188"
            y1="9.84375"
            x2="26.7188"
            y2="25.3125"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CC3366" />
            <stop offset="0.703125" stop-color="#F05B91" />
            <stop offset="1" stop-color="#FF6CA3" />
          </linearGradient>
        </defs>
      </svg>
    </MotionFlex>
  );
}
