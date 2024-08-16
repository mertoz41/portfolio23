import React from "react";
import {
  Wrap,
  Box,
  Text,
  Tooltip,
  WrapItem,
  Image,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";
const Projects = () => {
  const projects = [
    {
      title: "parlay-builder",
      brief: "Parlay Builder app to help users with their parlays",
    },
    {
      title: "cezs",
      brief: "Music platform for instrumentalists",
    },
    {
      title: "squirrel",
      brief: "Banking app to teach financial literacy to scholars",
    },
    {
      title: "mfm",
      brief:
        "App that earns Military servicemembers flights back home for volunteer work",
    },
  ];

  const renderProjects = () => {
    return projects.map((project: any, i: number) => (
      <GridItem
        colSpan={2}
        rowSpan={2}
        display={"flex"}
        justifyContent={"center"}
        key={i}
      >
        <Tooltip
          label={project.brief}
          fontSize={20}
          placement="top"
          borderRadius={10}
          backgroundColor={"#262626"}
        >
          <Link key={i} href={`/projects/${project.title}`}>
            <Image
              src={"ios-folder.jpeg"}
              h={{ base: "100px", xl: "170px" }}
              w={{ base: "100px", xl: "170px" }}
              alt="folder"
            />
            <Text
              alignSelf={"center"}
              // display={"inline-block"}
              fontWeight={500}
              textAlign={"center"}
              fontSize={{ base: 18, xl: 22 }}
            >
              {project.title}
            </Text>
          </Link>
        </Tooltip>
      </GridItem>
    ));
  };

  return (
    <Box>
      <Heading
        fontSize={{ base: 55, xl: 40 }}
        textAlign={"center"}
        fontWeight={300}
        marginBottom={5}
      >
        projects
      </Heading>
      <Grid
        h="auto"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        {renderProjects()}
      </Grid>
    </Box>
  );
};

export default Projects;
