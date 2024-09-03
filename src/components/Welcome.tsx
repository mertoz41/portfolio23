import React from "react";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
const Welcome = () => {
  return (
    <Flex
      backgroundColor={"#262626"}
      flexDirection={{ base: "column", xl: "column" }}
      marginTop={20}
    >
      <Flex
        height={{base: 750 ,xl: 500}}
        alignSelf={"center"}
        flexDir={"column"}
        justifyContent={"center"}
      >
        <Flex
  
          justifyContent={"center"}
          flexDirection={"row"}
        >
          <Flex justifyContent={{ base: "space-between", xl: "none" }}>
            <Text
              fontSize={{ base: 55, xl: 50 }}
              alignSelf={"center"}
              fontWeight={300}
            >
              Hi, I{"'"}m Mert
            </Text>
            <Image
              src={"mert-pic.jpg"}
              h={{ base: "70px", xl: "130px" }}
              w={{ base: "70px", xl: "130px" }}
              alt="mert picture"
              alignSelf={"center"}
              borderRadius={"50%"}
              marginX={2}
            />
          </Flex>
        </Flex>
        <Flex justifyContent={"center"} flexDirection={"row"} fontSize={{base: 17, xl: 20}}>
          <Text>Full-stack web developer based in Washington DC.</Text>
        </Flex>
        <Flex alignSelf={"center"} marginTop={10}>
          <Link target="_blank" href="https://github.com/mertoz41">
            <IoLogoGithub size={40} color="#e5e5e5" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/mert-ozkaynak/"
          >
            <IoLogoLinkedin size={40} color="#e5e5e5" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Welcome;
