import React from "react";
import { Wrap, Box, Text, Tooltip, WrapItem, Image } from "@chakra-ui/react";
import Link from "next/link";
const Projects = () => {
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
      title: "mfm",
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

  const renderProject = (project: any, index: number) => {
    return (
      <Link key={index} href={`/projects/${project.title}`}>
        <Tooltip
          label={project.brief}
          fontSize={20}
          placement="top"
          borderRadius={10}
          backgroundColor={"#363636"}
        >
          <WrapItem
            flexDirection={"column"}
            borderRadius={30}
            cursor={"pointer"}
            padding={5}
          >
            <Image
              src={"ios-folder.jpeg"}
              h={{ base: "100px", xl: "170px" }}
              w={{ base: "100px", xl: "170px" }}
              alt="folder"
            />
            <Text
              alignSelf={"center"}
              display={"inline-block"}
              fontWeight={500}
              fontSize={{ base: 18, xl: 22 }}
            >
              {project.title}
            </Text>
          </WrapItem>
        </Tooltip>
      </Link>
    );
  };
  const renderProjectsSection = () => {
    return projects.map((project: any, i: number) => renderProject(project, i));
  };

  return (
    <Box marginTop={50}>
      <Wrap
        justify={{ base: "center", xl: "flex-start" }}
        spacing="30px"
        height={"auto"}
      >
        {renderProjectsSection()}
      </Wrap>
    </Box>
  );
};

export default Projects;
