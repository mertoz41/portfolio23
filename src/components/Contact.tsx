import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import { Link } from "@chakra-ui/react";
import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
  return (
    <Flex
      minH={400}
      flexDirection={{ base: "column", xl: "column" }}
      marginTop={10}
    >
      <SectionTitle title={"contact"} />
      <Text
        fontWeight={300}
        fontSize={{ base: 30, xl: 20 }}
        lineHeight={2.2}
        marginY={2}
      >
        <span
          style={{
            backgroundColor: "#262626",
            whiteSpace: "pre-wrap",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <span>
            Thanks for visiting my portfolio. If you're interested in
            collaborating, have any questions, or would like to discuss
            potential opportunities, feel free to get in touch. I'm always open
            to new connections and exciting projects.
          </span>
        </span>
      </Text>
      <Flex marginTop={5} marginBottom={10} alignSelf={"center"}>
        <Link target="_blank" href="mailto:mertozka41@gmail.com">
          <IoIosMail size={40} color="#e5e5e5" />
        </Link>
        <Link target="_blank" href="https://github.com/mertoz41">
          <IoLogoGithub size={40} color="#e5e5e5" />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/mert-ozkaynak/">
          <IoLogoLinkedin size={40} color="#e5e5e5" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Contact;
