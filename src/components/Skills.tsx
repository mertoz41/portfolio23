import React from "react";
import { Flex, Text, Heading, Box } from "@chakra-ui/react";
import { backendData, frontendData } from "@/utilities/HardcodeData";
import Image from "next/image";

const Skills = () => {
  const renderSkillSection = (title: string, stack: any) => (
    <Flex justifyContent={"space-between"}>
      <Heading alignSelf={"center"} fontSize={25} fontWeight={300}>
        {title}
      </Heading>
      <Flex>
        {stack.map((lang: string) => (
          <Image src={`/langs/${lang}.png`} alt={lang} width="64" height="64" />

          //   <Text marginRight={"2"}>{lang}</Text>
        ))}
      </Flex>
    </Flex>
  );
  return (
    <Flex
      //   backgroundColor={"#262626"}
      flexDirection={{ base: "column", xl: "column" }}
      marginTop={10}
      minHeight={300}
    >
      <Heading
        fontSize={{ base: 55, xl: 40 }}
        textAlign={"center"}
        fontWeight={300}
        marginBottom={5}
      >
        tech stack
      </Heading>
      <Flex justify={"space-between"} flexDir={"column"}>
        {/* {renderSkillSection("backend", backendData)} */}
        {renderSkillSection("frontend", frontendData)}
        {/* {renderSkillSection("other")} */}
      </Flex>
      {/* <Flex
        height={500}
        alignSelf={"center"}
        flexDir={"column"}
        justifyContent={"center"}
      >
        <Flex justifyContent={"center"} flexDirection={"row"}>
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
        <Flex justifyContent={"center"} flexDirection={"row"}>
          <Text>Full-stack web developer based in Washington DC.</Text>
        </Flex>
      </Flex> */}
    </Flex>
  );
};

export default Skills;
