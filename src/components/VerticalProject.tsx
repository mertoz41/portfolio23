import React from "react";
import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import ProjectPic from "./ProjectPic";
const VerticalProject = ({ content }: { content: any }) => {
  const renderButtonSection = () => {
    const renderButton = (title: string, link: string) => (
      <Link href={link} isExternal>
        <Text
          backgroundColor={"#2e2e2e"}
          marginRight={5}
          cursor={"pointer"}
          _hover={{ backgroundColor: "#262626" }}
        >
          {title}
        </Text>
      </Link>
    );
    return (
      <Flex justify={"center"} marginTop={10}>
        {content.code ? renderButton("code", content.code) : null}
        {renderButton("live demo", content.liveLink)}
      </Flex>
    );
  };

  return (
    <Flex
      flexDirection={{ base: "column", xl: "column" }}
      marginTop={10}
      padding={5}
      backgroundColor={"#262626"}
    >
      <Heading marginBottom={10} alignSelf={"center"} fontSize={24}>
        {content.title}
      </Heading>
      <Flex justify={"center"}>
        <ProjectPic picture={content.pictures} name={content.name} />
      </Flex>

      <Flex padding={5} justifyContent={"center"} flexDirection={"column"}>
        <Text> {content.description}</Text>
        {renderButtonSection()}
      </Flex>
    </Flex>
  );
};

export default VerticalProject;
