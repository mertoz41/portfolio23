import React from "react";
import { Wrap } from "@chakra-ui/react";
import ProjectPic from "./ProjectPic";
const Cezs = () => {
  return (
    <Wrap
      display={"flex"}
      justify={{ base: "center", xl: "space-between" }}
      spacing="30px"
      overflowY={"auto"}
      padding={5}
    >
      <ProjectPic usage="phone" picture={"/cezs/third.png"} />
      <ProjectPic usage="phone" picture={"/cezs/fourth.png"} />
      <ProjectPic usage="phone" picture={"/cezs/fifth.png"} />
      <ProjectPic usage="phone" picture={"/cezs/first.png"} />
      <ProjectPic usage="phone" picture={"/cezs/second.png"} />
      <ProjectPic usage="phone" picture={"/cezs/sixth.png"} />
    </Wrap>
  );
};

export default Cezs;