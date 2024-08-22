import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

const Header = ({ handleScroll }: { handleScroll: any }) => {
  const renderNavBar = () => {
    const renderButton = (title: string) => (
      <Box
        onClick={() => handleScroll(title)}
        marginRight={"4"}
        cursor={"pointer"}
        _hover={{ backgroundColor: "transparent" }}
        backgroundColor={"#262626"}
      >
        <Text>{title}</Text>
      </Box>
    );
    return (
      <Flex fontSize={{ base: 30, xl: 20 }} alignSelf={"center"}>
        {renderButton("stack")}

        {renderButton("projects")}
        {renderButton("about")}
        {renderButton("contact")}
      </Flex>
    );
  };
  return (
    <Flex
      position={"fixed"}
      zIndex={1}
      w="50%"
      backdropFilter={"blur(10px)"}
      justifyContent={"space-between"}
    >
      <Image src={`/mlogo.png`} alt={"logo"} width="64" height="64" />
      {renderNavBar()}
    </Flex>
  );
};

export default Header;
