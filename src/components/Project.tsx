import React from "react";
import { Flex, Heading, Link, Text, Box } from "@chakra-ui/react";
import ProjectPic from "./ProjectPic";
import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Project = ({ content }: { content: any }) => {
  const renderButtonSection = () => {
    const renderButton = (title: string, link: string) => (
      <Link href={link} isExternal>
        <Flex
          backgroundColor={"#2e2e2e"}
          _hover={{ backgroundColor: "#262626" }}
          marginRight={5}
        >
          {title === "code" ? (
            <Box alignSelf={"center"} marginRight={2}>
              <IoLogoGithub size={30} color="#e5e5e5" />{" "}
            </Box>
          ) : null}
          <Text alignSelf={"center"} cursor={"pointer"}>
            {title}
          </Text>
        </Flex>
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
      flexDirection={{ base: "column", xl: "row" }}
      marginTop={10}
      padding={5}
      backgroundColor={"#262626"}
    >
      <Heading
        fontSize={{ base: 24, xl: 20 }}
        display={{ base: "block", xl: "none" }}
        marginBottom={10}
        alignSelf={"center"}
      >
        {content.title}
      </Heading>
      <ProjectPic picture={content.pictures} name={content.name} />

      <Flex
        fontSize={{ base: 24, xl: 20 }}
        padding={5}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Heading
          fontSize={{ base: 24, xl: 25 }}
          display={{ base: "none", xl: "block" }}
          marginBottom={10}
          alignSelf={"center"}
        >
          {content.title}
        </Heading>
        <Text>{content.description}</Text>
        <Text marginTop={5}>Tech stack: {content.techStack}</Text>
        {renderButtonSection()}
      </Flex>
    </Flex>
  );
};

export default Project;
