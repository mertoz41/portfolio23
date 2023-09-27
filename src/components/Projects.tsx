import React from "react";
import { Wrap, Box, Text, Tooltip, WrapItem, Image } from "@chakra-ui/react";
import Link from "next/link";
const Projects = () => {
  const projects = [
    {
      title: "cezs",
      brief: "Music platform for instrumentalists",
    },
    {
      title: "artstone",
      brief: "Official website for marble, granite, and quartz manufacturer",
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
    {
      title: "hooper-app",
      brief: "Basketball app that shows courts around you",
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
    <Box marginTop={11}>
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
