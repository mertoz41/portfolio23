import React, { useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { animated, useSpring } from "@react-spring/web";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Welcome from "@/components/Welcome";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ProjectsContainer from "@/components/ProjectsContainer";

function App() {
  const projectRef = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLInputElement>(null);
  const stackRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

  const [homeAnimation, animate] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));
  const handleScroll = (type: string) => {
    switch (type) {
      case "projects":
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        ref.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "stack":
        stackRef.current?.scrollIntoView({ behavior: "smooth" });

        break;

      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
    }
  };
  return (
    <Box bg="#2e2e2e" color="white">
      <Head>
        <title>Mert Ozkaynak</title>
        <meta name="description" content="Mert Ozkaynak portfolio website" />
        <meta name="keywords" content="Mert Ozkaynak portfolio website" />
        <meta
          name="google-site-verification"
          content="BdcSbbdl77EbnSO73TNDEkRqlOehHt5rPaegmW6vBKA"
        />
        <meta charSet="utf-8"></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <animated.div style={homeAnimation}>
        <Flex
          h="auto"
          color="white"
          overflowY={"auto"}
          justifyContent={"center"}
        >
          <Flex flexDirection={"column"} w={{ base: "90%", xl: "50%" }}>
            <Header handleScroll={handleScroll} />
            <Welcome />
            <Box ref={stackRef}>
              <Skills />
            </Box>
            <Box ref={projectRef}>
              <ProjectsContainer />
            </Box>
            <Box ref={ref}>
              <About />
            </Box>
            <Box ref={contactRef}>
              <Contact />
            </Box>
            {/* <Footer /> */}
          </Flex>
        </Flex>
      </animated.div>
    </Box>
  );
}

export default App;
