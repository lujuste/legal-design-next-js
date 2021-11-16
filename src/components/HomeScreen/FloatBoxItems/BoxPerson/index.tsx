import { Flex, HTMLChakraProps } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import { NextPage } from "next";

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionFlexProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

export const MotionFlex: NextPage<MotionFlexProps> = motion(Flex);

export default function BoxPerson() {
  return (
    <MotionFlex
      as="div"
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
        "translateX(60px) ",
        "translateX(90px)",
        "translateX(140px)",
        "translateX(45px)",
        "translateX(80px)",
      ]}
      animate={{
        y: [5, -5, 10],
        x: [30, 0, -24],

        scale: [1, 1, 1, 1, 1],
        rotate: [0, 0, 0, 0, 0],
        borderRadius: ["20%", "20%", "20", "20%", "20%"],
      }}
      transition={{
        duration: 22,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
        delay: 2,
      }}
    >
      <svg
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.7329 6.9373C33.6425 4.68037 30.7228 3.4375 27.5001 3.4375C24.2603 3.4375 21.3309 4.67285 19.2501 6.91582C17.1468 9.1835 16.122 12.2654 16.3626 15.5934C16.8396 22.159 21.8357 27.5 27.5001 27.5C33.1645 27.5 38.1521 22.1601 38.6365 15.5955C38.8804 12.2977 37.8491 9.22217 35.7329 6.9373Z"
          fill="url(#paint0_linear_9586:15084)"
          fill-opacity="0.8"
        />
        <path
          d="M46.406 51.5625H8.59351C8.09858 51.5689 7.60844 51.465 7.15874 51.2581C6.70905 51.0513 6.31112 50.7469 5.9939 50.3669C5.29566 49.5322 5.01421 48.3925 5.22261 47.2398C6.12925 42.2104 8.95874 37.9854 13.406 35.0195C17.357 32.3866 22.3618 30.9375 27.4998 30.9375C32.6377 30.9375 37.6425 32.3877 41.5935 35.0195C46.0408 37.9844 48.8703 42.2093 49.7769 47.2388C49.9853 48.3914 49.7039 49.5311 49.0056 50.3658C48.6885 50.746 48.2906 51.0506 47.8409 51.2577C47.3912 51.4647 46.901 51.5688 46.406 51.5625Z"
          fill="url(#paint1_linear_9586:15084)"
          fill-opacity="0.8"
        />
        <defs>
          <linearGradient
            id="paint0_linear_9586:15084"
            x1="27.4999"
            y1="3.4375"
            x2="27.4999"
            y2="27.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CC3366" />
            <stop offset="0.703125" stop-color="#F05B91" />
            <stop offset="1" stop-color="#FF6CA3" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_9586:15084"
            x1="27.4998"
            y1="30.9375"
            x2="27.4998"
            y2="51.5628"
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
