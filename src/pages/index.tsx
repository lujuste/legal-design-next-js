import { NextPage } from "next";
import dynamic from "next/dynamic";
import HomeScreen from "../components/HomeScreen";
import Cards from "../components/Cards";
import Customers from "../components/Customers";
import CarrouselDocument from "../components/CarrouselDocument";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import { Spinner, Flex } from "@chakra-ui/react";
import Head from "next/head";

const DynamicComponentWithCustomLoading = dynamic(
  () => import("../components/HomeScreen"),
  {
    loading: () => (
      <>
        <Flex justify="center" align="center" mx="auto" w="100%" h="100vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="pink.900"
            size="xl"
          />
        </Flex>
      </>
    ),
  }
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Legal Design - Bits Academy </title>
        <meta
          name="description"
          content="Tornamos documentos jurídicos mais amigáveis. Legal Design e Bits Academy "
        />
        <meta charSet="utf-8" />
      </Head>
      <DynamicComponentWithCustomLoading />
      <Cards />
      <Customers />
      <CarrouselDocument />
      <Statistics />
      <Testimonials />
    </>
  );
};

export default Home;
