import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
const Contact = () => {
  return (
    <Flex
      minH={400}
      flexDirection={{ base: "column", xl: "column" }}
      marginTop={10}
    >
      <SectionTitle title={"contact"} />
    </Flex>
  );
};

export default Contact;
