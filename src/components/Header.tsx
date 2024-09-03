import React from "react";
import {
  Flex,
  Text,
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import Image from "next/image";

const Header = ({ handleScroll }: { handleScroll: any }) => {
  const renderMobileMenu = () => {
    const renderMenuButton = (title: string) => (
      <MenuItem backgroundColor={"#262626"} onClick={() => handleScroll(title)}>
        {title}
      </MenuItem>
    );
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          alignSelf={"center"}
          aria-label="Options"
          icon={<HamburgerIcon w={8} h={8} color="white" />}
          variant="outline"
        />
        <MenuList backgroundColor={"#262626"}>
          {renderMenuButton("stack")}
          {renderMenuButton("projects")}
          {renderMenuButton("about")}
          {renderMenuButton("contact")}
        </MenuList>
      </Menu>
    );
  };
  const renderDesktopMenu = () => {
    const renderButton = (title: string) => (
      <Box
        onClick={() => handleScroll(title)}
        marginRight={"4"}
        cursor={"pointer"}
        _hover={{ backgroundColor: "transparent" }}
        backgroundColor={"#262626"}
      >
        <Text>{title}</Text>
      </Box>
    );
    return (
      <Flex fontSize={{ base: 30, xl: 20 }} alignSelf={"center"}>
        {renderButton("stack")}
        {renderButton("projects")}
        {renderButton("about")}
        {renderButton("contact")}
      </Flex>
    );
  };
  return (
    <Flex
      position={"fixed"}
      zIndex={1}
      w={{ base: "90%", xl: "50%" }}
      backdropFilter={"blur(10px)"}
      justifyContent={"space-between"}
    >
      <Image src={`/mlogo.png`} alt={"logo"} width="64" height="64" />
      <Flex display={{ base: "none", xl: "flex" }}>{renderDesktopMenu()}</Flex>
      <Flex display={{ base: "flex", xl: "none" }}>{renderMobileMenu()}</Flex>
    </Flex>
  );
};

export default Header;
