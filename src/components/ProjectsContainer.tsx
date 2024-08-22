import React from "react";
import { Flex, Heading, Image, Box } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import Project from "./Project";
import VerticalProject from "./VerticalProject";
import { projects } from "@/utilities/HardcodeData";
const ProjectsContainer = () => {
  return (
    <Flex flexDirection={{ base: "column", xl: "column" }} marginTop={55}>
      <SectionTitle title={"projects"} />
      <Project content={projects.parlaybuilder} />
      <Project content={projects.cezs} />
      <VerticalProject content={projects.squirrel} />
      <Project content={projects.mfm} />
    </Flex>
  );
};

export default ProjectsContainer;
