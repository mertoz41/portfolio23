import React from "react";
import { Text, Flex } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex flexDirection="column" paddingY={5}>
      <Text fontSize={{ base: 30, xl: 30 }} fontWeight={300}>
        I build responsive, accessible, and performant apps.
      </Text>
      <Text fontSize={{ base: 30, xl: 30 }} fontWeight={300}>
        Passionate about minimal design, focusing on the essential.
      </Text>
    </Flex>
  );
};

export default About;
