import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { animated, useSpring } from "@react-spring/web";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
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
      </Head>
      {/* <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head> */}

      <animated.div style={homeAnimation}>
        <Flex
          h="100vh"
          color="white"
          overflowY={"auto"}
          justifyContent={"center"}
        >
          <Flex flexDirection={"column"} w="50%">
            <Header />
            <About />
            <Projects />
          </Flex>
        </Flex>
      </animated.div>
    </Box>
  );
}

export default App;
