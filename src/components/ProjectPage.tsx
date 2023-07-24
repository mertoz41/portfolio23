import React from "react";
import { Text, Flex, Image, Box, Heading, Link } from "@chakra-ui/react";
import { animated } from "@react-spring/web";
import { FiArrowLeft } from "react-icons/fi";
import Cezs from "./Cezs";
import Squirrel from "./Squirrel";
import Mfm from "./Mfm";
import Hooper from "./Hooper";

const ProjectPage = ({
  projectAnimation,
  project,
  closeProject,
}: {
  projectAnimation: any;
  project: any;
  closeProject: any;
}) => {
  const renderHeader = () => {
    return (
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent={"space-between"}
        m="0 auto"
        // backgroundColor={"red"}
        backdropFilter={"blur(8px)"}
        w={{ base: "90%", xl: "50%" }}
      >
        <Flex flexDirection="row" justifyContent="space-between" w="100%">
          <FiArrowLeft
            style={{
              height: 50,
              width: 50,
              alignSelf: "center",
              marginTop: 10,
              cursor: "pointer",
            }}
            onClick={() => closeProject()}
          />
          <Flex>
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
            {project.title === "cezs" ? (
              <Image src={"/icon.png"} boxSize={40} borderRadius={15} />
            ) : (
              <Text
                fontSize={{ base: 35, xl: 60 }}
                marginLeft={5}
                alignSelf={"flex-end"}
              >
                {project.title}
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    );
  };

  const renderDescription = () => {
    return (
      <>
        <Text fontSize={22} fontWeight={500}>
          {project.description}
        </Text>
        {project.description2 && (
          <Text fontSize={22} fontWeight={500} marginTop={5}>
            {project.description2}
          </Text>
        )}
        {project.description3 && (
          <Text fontSize={22} fontWeight={500} marginTop={5}>
            {project.description3}
          </Text>
        )}
      </>
    );
  };

  return (
    <animated.div style={projectAnimation}>
      {renderHeader()}
      <Box h="100vh" bg="#2e2e2e" color="white" overflowY={"auto"}>
        <Flex
          m="0 auto"
          w={{ base: "90%", xl: "50%" }}
          h="100vh"
          justifyContent={"space-between"}
          flexDir={"column"}
        >
          <Flex flexDir={"column"}>
            {renderDescription()}
            {project.title === "cezs" && <Cezs />}
            {project.title === "squirrel" && <Squirrel />}
            {project.title === "miles-for-military" && <Mfm />}
            {project.title === "hooper-app" && <Hooper />}
          </Flex>
        </Flex>
      </Box>
    </animated.div>
  );
};

export default ProjectPage;
