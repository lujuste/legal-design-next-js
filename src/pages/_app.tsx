import { NextPage } from "next";
import { AppProps } from "next/app";

import { useQuery, QueryClient, QueryClientProvider } from "react-query";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../shared/styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawer";
import { Layout } from "../shared/layout";
import { useState } from "react";
import { Router } from "next/router";

import "swiper/css";
import "../shared/styles/slider.scss";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Loading from "../components/Loading";

const queryClient = new QueryClient();

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState<boolean>(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <QueryClientProvider client={queryClient}>
      {loading ? (
        <Loading />
      ) : (
        <SidebarDrawerProvider>
          <ChakraProvider resetCSS theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </SidebarDrawerProvider>
      )}
    </QueryClientProvider>
  );
};

export default MyApp;
