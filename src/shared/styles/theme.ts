import { extendTheme, ThemeConfig, useColorMode } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors: {
    pink: {
      "900": "#CC3366",
    },
    gray: {
      "900": "#000000",
      "800": "#343A40",
      "500": "#6C757D",
      "400": "ADB5BD",
      "300": "DEE2E6",
      "100": "F8F9FA",
    },
    green: {
      "900": "#198754",
    },
  },
  fonts: {
    heading: "Rboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "black",
      },
    },
  },
});
