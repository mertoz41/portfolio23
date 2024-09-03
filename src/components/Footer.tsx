import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoIosMail,
} from "react-icons/io";

const Footer = () => {
  return (
    <Flex justifyContent={"center"} paddingY={20}>
      <Flex
        flexDirection={{ base: "row", xl: "row" }}
        justifyContent={"space-between"}
        alignSelf={"flex-end"}
      >
        <Link target="_blank" href="mailto:mertozka41@gmail.com">
          <IoIosMail size={40} color="#e5e5e5" />
        </Link>
   
        <Link target="_blank" href="https://www.instagram.com/mertozkaynak14/">
          <IoLogoInstagram size={40} color="#e5e5e5" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
