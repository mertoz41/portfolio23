import React from "react";
import { Fade, Flex } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import Project from "./Project";
import VerticalProject from "./VerticalProject";
import { projects } from "@/utilities/HardcodeData";
import FadeInSection from "./FadeInSection";
const ProjectsContainer = () => {
  return (
    <Flex flexDirection={{ base: "column", xl: "column" }} marginTop={55}>
      <FadeInSection>
        <SectionTitle title={"projects"} />
      </FadeInSection>
      <FadeInSection>
        <Project content={projects.parlaybuilder} />
      </FadeInSection>
      <FadeInSection>
        <Project content={projects.cezs} />
      </FadeInSection>
      <FadeInSection>
        <VerticalProject content={projects.squirrel} />
      </FadeInSection>
      <Project content={projects.mfm} />
    </Flex>
  );
};

export default ProjectsContainer;
