import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { animated, useSpring } from "@react-spring/web";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
function App() {
  const [homeAnimation, animate] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));

  return (
    <Box bg="#2e2e2e" color="white">
      <Head>
        <title>Mert Ozkaynak</title>
        <meta name="description" content="Mert Ozkaynak portfolio website" />
        <meta
          name="google-site-verification"
          content="BdcSbbdl77EbnSO73TNDEkRqlOehHt5rPaegmW6vBKA"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <animated.div style={homeAnimation}>
        <Flex
          h="100vh"
          color="white"
          overflowY={"auto"}
          justifyContent={"center"}
        >
          <Flex flexDirection={"column"} w={{ base: "90%", xl: "50%" }}>
            <Header />
            <Projects />
            <Footer />
          </Flex>
        </Flex>
      </animated.div>
    </Box>
  );
}

export default App;
