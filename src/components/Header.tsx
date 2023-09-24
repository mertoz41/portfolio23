import React from "react";
import { Flex, Text, Image, Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      flexDirection={{ base: "column", xl: "row" }}
      justifyContent={"space-between"}
      marginTop={10}
    >
      <Flex
        w="100%"
        justifyContent={"space-between"}
        flexDirection={{ base: "column", xl: "row" }}
      >
        <Flex justifyContent={{ base: "space-between", xl: "none" }}>
          <Text fontSize={{ base: 55, xl: 50 }} fontWeight={300}>
            Hi, I{"'"}m Mert
          </Text>
          <Image
            src={"mert-pic.jpg"}
            h={{ base: "70px", xl: "60px" }}
            w={{ base: "70px", xl: "60px" }}
            alt="mert picture"
            alignSelf={"center"}
            borderRadius={"50%"}
            marginX={2}
          />
        </Flex>
        <Box alignSelf={{ xl: "flex-end" }}>
          <Text
            fontSize={{ base: 23, xl: 20 }}
            fontWeight={300}
            textAlign={{ base: "left", xl: "right" }}
          >
            Web Developer
          </Text>
          <Text
            fontSize={{ base: 23, xl: 20 }}
            fontWeight={300}
            textAlign={{ base: "left", xl: "right" }}
          >
            Washington, DC | İzmir
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
