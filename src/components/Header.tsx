import React from "react";
import { Flex, Image, Link, Text } from "@chakra-ui/react";
const Header = () => {
  const renderContact = () => {
    return (
      <>
        <Flex
          flexDirection={{ base: "column", xl: "row" }}
          justifyContent={"space-between"}
        >
          <Flex flexDirection="column" justifyContent="space-between">
            <Flex alignSelf={"flex-start"}>
              <Link target="_blank" href="https://github.com/mertoz41">
                <Text textDecor={"underline"} fontSize={20}>
                  github
                </Text>
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/mert-ozkaynak/"
              >
                <Text textDecor={"underline"} fontSize={20} ml={5}>
                  linkedin
                </Text>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/mertozkaynak14/"
              >
                <Text textDecor={"underline"} fontSize={20} ml={5}>
                  instagram
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  };
  return (
    <Flex
      flexDirection={{ base: "column", xl: "row" }}
      justifyContent={"space-between"}
    >
      <Flex flexDirection="column" justifyContent="space-around">
        <Text fontSize={{ base: 35, xl: 60 }}>software engineer</Text>
        {renderContact()}
      </Flex>

      <Image
        boxShadow={"2xl"}
        src={"/mert.jpg"}
        h="180px"
        w="180px"
        alt="mert headshot"
        borderRadius={"50%"}
        alignSelf="center"
        marginTop={{ base: 5, xl: 0 }}
      />
    </Flex>
  );
};

export default Header;
