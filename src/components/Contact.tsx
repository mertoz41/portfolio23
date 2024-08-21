import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Flex minH={400} flexDirection={{ base: "column", xl: "column" }} marginTop={10}>
      <Heading
        fontSize={{ base: 55, xl: 40 }}
        textAlign={"center"}
        fontWeight={300}
        marginBottom={5}
      >
        contact
      </Heading>
    </Flex>
  );
};

export default Contact;
