import Router from "next/router";
import NProgress from "nprogress";
import { ChakraProvider, Box, useMediaQuery } from "@chakra-ui/react";
import Header from "@/component/Layout/Header";
import { Inter } from "@next/font/google";
import SideBar from "@/component/Layout/SideBar";
import "../styles/custom.css";
import { customTheme } from "@/styles/theme";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: any) {
  const [isMobile] = useMediaQuery("(max-width: 991px)");

  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  return (
    <ChakraProvider theme={customTheme}>
      <Box
        bg="#f0f1f3"
        overflowX="hidden"
        pos="relative"
        className={inter.className}
      >
        <Box minH="100vh">
          <Header />
          {!isMobile && <SideBar />}
          <Box
            w="100%"
            pt="110px"
            pl={!isMobile ? "270px" : "30px"}
            pr={!isMobile ? "32px" : "30px"}
            minH="100vh"
            color="#828282"
            pb={10}
          >
            <Component {...pageProps} />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
