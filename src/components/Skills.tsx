import React from "react";
import { Flex, Text, Heading, Box } from "@chakra-ui/react";
import { backendData, frontendData } from "@/utilities/HardcodeData";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
const Skills = () => {
  const renderSkillSection = (title: string, stack: any) => (
    <Flex
      flexDirection={{ base: "column", xl: "row" }}
      justifyContent={"space-between"}
      marginBottom={10}
    >
      <Heading
        alignSelf={"center"}
        fontSize={25}
        marginBottom={{ base: 5, xl: 0 }}
        fontWeight={300}
      >
        {title}
      </Heading>
      <Flex justifyContent={{ base: "space-around" }}>
        {stack.map((lang: string, i: number) => (
          <Flex key={i} marginRight={5}>
            <Image
              src={`/langs/${lang}.png`}
              alt={lang}
              width="44"
              height="64"
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
  return (
    <Flex flexDirection={{ base: "column", xl: "column" }} marginTop={55}>
      <SectionTitle title={"tech stack"} />

      <Flex justify={"space-between"} flexDir={"column"}>
        {renderSkillSection("backend", backendData)}
        {renderSkillSection("frontend", frontendData)}
      </Flex>
    </Flex>
  );
};

export default Skills;
