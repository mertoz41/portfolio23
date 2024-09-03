import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import { Link } from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <Flex
      minH={400}
      flexDirection={{ base: "column", xl: "column" }}
      marginTop={10}
    >
      <SectionTitle title={"contact"} />
      <Text lineHeight={2.2} marginY={2}>
        <span
          style={{
            backgroundColor: "#262626",
            whiteSpace: "pre-wrap",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <span>mertozka41@gmail.com</span>
        </span>
      </Text>
      {/* <Text>
        I'm always excited to collaborate, share ideas, or answer any questions
        you may have. Whether you're interested in my work, or have a project in
        mind, feel free to reach out. I'll get back to you as soon as possible!
      </Text> */}
      <Link target="_blank" href="mailto:mertozka41@gmail.com">
        <IoIosMail size={40} color="#e5e5e5" />
      </Link>
    </Flex>
  );
};

export default Contact;
