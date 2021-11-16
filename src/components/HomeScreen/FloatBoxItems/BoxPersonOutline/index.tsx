import { Flex, HTMLChakraProps } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import { NextPage } from "next";

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionFlexProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

export const MotionFlex: NextPage<MotionFlexProps> = motion(Flex);

export default function BoxPersonOutline() {
  return (
    <MotionFlex
      as="div"
      mt={["-3rem", "-2rem", "0rem", "0"]}
      mr={["1rem", "2rem", "0"]}
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
        "translateX(10px) ",
        "translateX(90px) ",
        "translateX(40px)",
        "translateX(70px)",
        "translateX(80px)",
      ]}
      animate={{
        y: [0, -20, 0, 40],
        x: [60, 40, -20],
        scale: [1, 1, 1, 1, 1],
        rotate: [0, 0, 0, 0, 0],
        borderRadius: ["20%", "20%", "20", "20%", "20%"],
      }}
      transition={{
        duration: 18,
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.22214 47.2399C7.17856 36.3921 17.6662 30.9375 27.4999 30.9375C37.3337 30.9375 47.8212 36.3921 49.7788 47.2397L49.7788 47.2398C49.9548 48.2155 49.7838 49.2602 49.2051 50.1053C48.5999 50.9891 47.6024 51.5625 46.4062 51.5625H8.59368C7.39744 51.5625 6.40027 50.9886 5.7955 50.105C5.21715 49.26 5.04611 48.2156 5.22214 47.2399ZM27.4999 34.375C18.6422 34.375 10.1592 39.2329 8.60506 47.85L8.60504 47.8501C8.58833 47.9427 8.59163 48.0202 8.6024 48.0766C8.60616 48.0963 8.61059 48.1123 8.61488 48.125H46.386C46.3903 48.1123 46.3948 48.0962 46.3985 48.0765C46.4093 48.0201 46.4126 47.9428 46.3959 47.8502C44.8408 39.2329 36.3576 34.375 27.4999 34.375Z"
          fill="url(#paint0_linear_9586:15089)"
          fill-opacity="0.8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.5001 3.4375C20.8031 3.4375 15.831 8.69475 16.3327 15.5934L16.3327 15.5936C16.7934 21.9212 21.6409 27.5 27.5001 27.5C33.361 27.5 38.1985 21.9184 38.6672 15.5958L38.6672 15.5957C39.1696 8.81361 34.2079 3.4375 27.5001 3.4375ZM27.4999 24.0625C31.7715 24.0625 35.2343 19.463 35.2343 14.7168C35.2343 9.9706 31.7715 6.875 27.4999 6.875C23.2284 6.875 19.7656 9.9706 19.7656 14.7168C19.7656 19.463 23.2284 24.0625 27.4999 24.0625Z"
          fill="url(#paint1_linear_9586:15089)"
          fill-opacity="0.8"
        />
        <defs>
          <linearGradient
            id="paint0_linear_9586:15089"
            x1="27.5005"
            y1="30.9375"
            x2="27.5005"
            y2="51.5625"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CC3366" />
            <stop offset="0.703125" stop-color="#F05B91" />
            <stop offset="1" stop-color="#FF6CA3" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_9586:15089"
            x1="27.5001"
            y1="3.4375"
            x2="27.5001"
            y2="27.5"
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
