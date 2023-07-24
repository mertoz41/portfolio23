import React, { useState } from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  Link,
  Tooltip,
  Skeleton,
} from "@chakra-ui/react";
import Head from "next/head";

import { animated, useSpring } from "@react-spring/web";
import { Wrap, WrapItem } from "@chakra-ui/react";
import ProjectPage from "../src/components/ProjectPage";
function App() {
  const [homeAnimation, animate] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));

  const [projectAnimation, projectAnimate] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 0 },
  }));

  const projects = [
    {
      title: "cezs",
      brief: "Music platform for instrumentalists",
      description:
        "Musicians platform focused on instruments and music as performing arts, built as a side hustle when I observed that current musicians platforms are inconvenient for instrumentalists with sound files and by music made on laptops.",
      description2:
        "Provides a catalog which users contribute to as they build their portfolios and maps to explore musicians around to collaborate and pinpoint upcoming gigs. ",
      description3:
        "Used Ruby on Rails to build a RESTful API in the backend, utilized ActionCable for real time features, AWS S3 through ActiveStorage to store user videos, and Json Web Tokens for authentication while I built the frontend with Expo managed React Native and utilized Redux to manage app state.",
      liveLink: "https://apps.apple.com/us/app/cezs/id6450903389",
    },
    {
      title: "squirrel",
      brief: "Banking app to teach financial literacy to scholars",
      description:
        "Banking app for an edtech startup based in Abu Dhabi with a goal to teach scholars financial literacy as early as possible. Simulates deposits sent by teachers, transferring money between checking, saving, and emergency accounts, randomized real life events, weekly payments such as transportation cost, desk rent, and school fee, and a marketplace to purchase items to customize students' avatar.",
      description2:
        "I led the frontend development of the project using TypeScript/React and wrote component testing for business logic. Learned working with GraphQL APIs and wrote queries and mutations In a Django/Python codebase.",
      embedId: "OmjkEZvZiHg",
    },
    {
      title: "miles-for-military",
      brief:
        "App that earns Military servicemembers flights back home for volunteer work",
      description:
        " App that earns Military servicemembers flights back home for volunteer work. Assisted in frontend functionalty in a React/TypeScript codebase, wrote GraphQL queries and mutations in a Django/Python backend.",
      embedId: "tNyQDQ7cUEw",
    },
    {
      title: "hooper-app",
      brief: "Basketball app that shows courts around you",
      description:
        "Basketball app that displays basketball courts on the map and allows users to organize games through each locations forum. First project I got to build on my own in my coding journey as I wanted to work with maps. While brainstorming, I reminisced the days my friends and I wished a way to find others to hoop against in the city, then built it for the 10 year old me.",
      liveLink: "https://hooper-frontend.herokuapp.com/",
      code: "https://github.com/mertoz41/hooper-front-end",
    },
  ];

  const [displayProject, setDisplayProject] = useState<any | null>(null);
  const [picLoaded, setPicLoaded] = useState(false);

  const selectProject = (project: any) => {
    animate.start({ from: { opacity: 1 }, to: { opacity: 0 } });
    setTimeout(() => {
      setDisplayProject(project);
    }, 500);
    setTimeout(() => {
      projectAnimate.start({ from: { opacity: 0 }, to: { opacity: 1 } });
    }, 500);
  };
  const renderProject = (project: any, index: number) => {
    return (
      <Tooltip
        label={project.brief}
        fontSize={20}
        placement="top"
        borderRadius={10}
        backgroundColor={"#363636"}
        key={index}
      >
        <WrapItem
          flexDirection={"column"}
          _hover={{ backgroundColor: "#363636" }}
          borderRadius={30}
          cursor={"pointer"}
          padding={5}
          onClick={() => selectProject(project)}
        >
          <Image
            src={"ios-folder.jpeg"}
            h={{ base: "180px", xl: "170px" }}
            w={{ base: "180px", xl: "170px" }}
          />
          <Text alignSelf={"center"} fontWeight={500} fontSize={22}>
            {project.title}
          </Text>
        </WrapItem>
      </Tooltip>
    );
  };

  const renderHeader = () => {
    return (
      <>
        <Flex
          flexDirection={{ base: "column", xl: "row" }}
          justifyContent={"space-between"}
        >
          <Flex flexDirection="column" justifyContent="space-around">
            <Text fontSize={{ base: 35, xl: 60 }}>software engineer</Text>
            {renderContact()}
          </Flex>

          <Image
            boxShadow={"2xl"}
            src={"/mert.jpg"}
            h="180px"
            w="180px"
            alt="mert headshot"
            borderRadius={"50%"}
            alignSelf="center"
            marginTop={{ base: 5, xl: 0 }}
          />
        </Flex>
      </>
    );
  };

  const closeProject = () => {
    projectAnimate.start({ from: { opacity: 1 }, to: { opacity: 0 } });
    setTimeout(() => {
      setDisplayProject(null);
    }, 500);
    setTimeout(() => {
      animate.start({ from: { opacity: 0 }, to: { opacity: 1 } });
    }, 500);
  };
  const renderAbout = () => {
    return (
      <>
        <Text mt={10} fontSize={20}>
          Experienced in building full stack web and mobile apps using
          JavaScript, Ruby, and Python libraries. Passionate about learning new
          technologies and building minimalist user interfaces, focusing on the
          essential.
        </Text>
      </>
    );
  };
  const renderProjectsSection = () => {
    return projects.map((project: any, i: number) => renderProject(project, i));
  };

  const renderContact = () => {
    return (
      <>
        <Flex
          flexDirection={{ base: "column", xl: "row" }}
          justifyContent={"space-between"}
        >
          <Flex flexDirection="column" justifyContent="space-between">
            <Flex alignSelf={"flex-start"}>
              <Link target="_blank" href="https://github.com/mertoz41">
                <Text textDecor={"underline"} fontSize={20}>
                  github
                </Text>
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/mert-ozkaynak/"
              >
                <Text textDecor={"underline"} fontSize={20} ml={5}>
                  linkedin
                </Text>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/mertozkaynak14/"
              >
                <Text textDecor={"underline"} fontSize={20} ml={5}>
                  instagram
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  };
  return (
    <Box bg="#2e2e2e" color="white">
      <Head>
        <title>Mert Ozkaynak</title>
      </Head>
      {displayProject ? (
        <ProjectPage
          projectAnimation={projectAnimation}
          project={displayProject}
          closeProject={closeProject}
        />
      ) : (
        <animated.div style={homeAnimation}>
          <Box h="100vh" bg="#2e2e2e" color="white" overflowY={"auto"}>
            <Flex justifyContent={"center"}>
              <Wrap
                display={"flex"}
                justify={{ base: "center", xl: "flex-start" }}
                spacing="30px"
                padding="10px"
                w={{ base: "90%", xl: "50%" }}
                height={"auto"}
              >
                <Box w="100%">
                  {renderHeader()}
                  {renderAbout()}
                  <Text fontSize={{ base: 35, xl: 50 }}>projects</Text>
                </Box>
                {renderProjectsSection()}
              </Wrap>
            </Flex>
          </Box>
        </animated.div>
      )}
    </Box>
  );
}

export default App;
