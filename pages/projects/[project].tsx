import React from "react";
import { Text, Flex, Image, Box, Wrap, Link } from "@chakra-ui/react";
import Head from "next/head";
import { animated, useSpring } from "@react-spring/web";
import { useRouter } from "next/router";
import ProjectPic from "@/components/ProjectPic";
import projects from "@/utilities/Projects";
const Project = () => {
  const router = useRouter();
  const [homeAnimation, animate] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));

  const project = projects[`${router.query.project}`];

  const renderHeader = () => {
    return (
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent={"space-between"}
        m="0 auto"
        backdropFilter={"blur(8px)"}
        w={{ base: "90%", xl: "50%" }}
      >
        <Flex flexDirection="row" justifyContent="space-between" w="100%">
          {router.query.project === "cezs" ? (
            <Image
              src={"/icon.png"}
              boxSize={40}
              borderRadius={15}
              alt="cezs-icon"
            />
          ) : (
            <Text
              fontSize={{ base: 35, xl: 60 }}
              alignSelf={"flex-end"}
              fontWeight={300}
            >
              {project.title}
            </Text>
          )}
          {project.liveLink ? (
            <Link
              href={project.liveLink}
              alignSelf={"center"}
              marginRight={5}
              padding={2}
              borderRadius={20}
              borderWidth={2}
              target="_blank"
            >
              <Text fontSize={22} fontWeight={500}>
                Live link
              </Text>
            </Link>
          ) : null}
        </Flex>
      </Flex>
    );
  };

  const renderDescription = () => {
    return (
      <Flex flexDir={"column"}>
        <Text fontSize={22} fontWeight={300}>
          {project.description}
        </Text>
        {project.description2 && (
          <Text fontSize={22} fontWeight={300} marginTop={5}>
            {project.description2}
          </Text>
        )}
        {project.description3 && (
          <Text fontSize={22} fontWeight={300} marginTop={5}>
            {project.description3}
          </Text>
        )}
      </Flex>
    );
  };
  const renderPictures = () => {
    return (
      <Wrap
        display={"flex"}
        justify={{ base: "center", xl: "center" }}
        spacing="30px"
        overflowY={"auto"}
        padding={5}
      >
        {project.pictures.map((name: string, i: number) => (
          <ProjectPic
            folder={
              project.title === "miles-for-military"
                ? "mfm"
                : project.title === "hooper-app"
                ? "hooper"
                : project.title
            }
            picture={`${name}.${project.picType}`}
            key={i}
          />
        ))}
      </Wrap>
    );
  };

  return (
    <Box h="100vh" bg="#2e2e2e" overflowY={"auto"}>
      <Head>
        <title>{router.query.project}</title>
      </Head>
      <animated.div style={homeAnimation}>
        <Box color="white">
          {project && renderHeader()}
          <Flex
            m="0 auto"
            w={{ base: "90%", xl: "50%" }}
            justifyContent={"space-between"}
            flexDir={"column"}
          >
            {project && renderDescription()}
            {project && renderPictures()}
          </Flex>
        </Box>
      </animated.div>
    </Box>
  );
};

export default Project;
