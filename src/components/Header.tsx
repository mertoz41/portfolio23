import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      flexDirection={{ base: "column", xl: "row" }}
      justifyContent={"space-between"}
    >
      <Flex justifyContent="space-between" w="100%">
        <Text fontSize={{ base: 35, xl: 50 }} fontWeight={300}>
          Welcome
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
