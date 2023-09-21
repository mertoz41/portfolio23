import React from "react";
import { Text, Flex, Link } from "@chakra-ui/react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoIosMail,
} from "react-icons/io";

const Footer = () => {
  return (
    <Flex justifyContent={"space-between"} paddingY={20}>
      <Text fontSize={{ base: 35, xl: 30 }} fontWeight={300}>
        Contact
      </Text>
      <Flex
        flexDirection={{ base: "row", xl: "row" }}
        justifyContent={"space-between"}
        alignSelf={"center"}
      >
        <Link target="_blank" href="mailto:mertozka41@gmail.com">
          <IoIosMail size={40} color="#e5e5e5" />
        </Link>
        <Link target="_blank" href="https://github.com/mertoz41">
          <IoLogoGithub size={40} color="#e5e5e5" />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/mert-ozkaynak/">
          <IoLogoLinkedin size={40} color="#e5e5e5" />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/mertozkaynak14/">
          <IoLogoInstagram size={40} color="#e5e5e5" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
