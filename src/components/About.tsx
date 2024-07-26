import React from "react";
import { Text, Flex } from "@chakra-ui/react";

const About = () => {
  const paragraphs = [
    "I am a full stack web developer with a background in international business studies and professional sports.",
    "In the past I worked at ThinkNimble where I worked on several projects simultaneously, nowadays I am working on Cezs and other projects.",
    "",
    "Outside of code I like to play chess with friends, search house music, and play basketball.",
  ];
  const renderLine = (text: string) => {
    return (
      <Text lineHeight={2.2} marginY={2}>
        <span
          style={{
            backgroundColor: "#262626",
            whiteSpace: "pre-wrap",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <span>{text}</span>
        </span>
      </Text>
    );
  };
  return (
    <Flex
      fontSize={{ base: 30, xl: 20 }}
      fontWeight={300}
      flexDirection="column"
      paddingY={5}
    >
      {renderLine(paragraphs[0])}
      {renderLine(paragraphs[1])}
      {renderLine(paragraphs[2])}
      {renderLine(paragraphs[3])}
      {renderLine(paragraphs[4])}
    </Flex>
  );
};

export default About;
