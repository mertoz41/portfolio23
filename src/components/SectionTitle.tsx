import React from "react";
import { Heading } from "@chakra-ui/react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Heading
      fontSize={{ base: 55, xl: 40 }}
      textAlign={"center"}
      fontWeight={300}
      marginBottom={5}
    >
      {title}
    </Heading>
  );
};

export default SectionTitle;
