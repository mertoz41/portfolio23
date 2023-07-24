import React from "react";
import { Wrap } from "@chakra-ui/react";
import ProjectPic from "./ProjectPic";
const Hooper = () => {
  return (
    <Wrap
      display={"flex"}
      justify={{ base: "center", xl: "center" }}
      spacing="30px"
      overflowY={"auto"}
      padding={5}
    >
      <ProjectPic usage="hooper" picture={"/hooper/explore.png"} />
      <ProjectPic usage="phone" picture={"/hooper/exploreResponsive.png"} />
      <ProjectPic usage="hooper" picture={"/hooper/location.png"} />
      <ProjectPic usage="phone" picture={"/hooper/locationResponsive.png"} />
      <ProjectPic usage="hooper" picture={"/hooper/newcourt.png"} />
      <ProjectPic usage="phone" picture={"/hooper/newcourtResponsive.png"} />
    </Wrap>
  );
};

export default Hooper;