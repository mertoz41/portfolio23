import React, { useState } from "react";
import { Text, Flex, Link } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  const [hovering, setHovering] = useState(false);
  return (
    <Flex justifyContent={"space-between"} paddingY={40}>
      <Text
        fontSize={{ base: 35, xl: 50 }}
        fontWeight={300}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {hovering ? "mertozka41@gmail.com" : "contact"}
      </Text>
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent={"space-between"}
        alignSelf={"center"}
      >
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
