import React from "react";
import { Wrap } from "@chakra-ui/react";
import ProjectPic from "./ProjectPic";
const Mfm = () => {
  return (
    <Wrap
      display={"flex"}
      justify={{ base: "center", xl: "space-between" }}
      spacing="30px"
      overflowY={"auto"}
      padding={5}
    >
      <ProjectPic usage="phone" picture={"/mfm/login.png"} />
      <ProjectPic usage="phone" picture={"/mfm/register.png"} />
      <ProjectPic usage="phone" picture={"/mfm/addHours.png"} />
      <ProjectPic usage="phone" picture={"/mfm/dashboard.png"} />
      <ProjectPic usage="phone" picture={"/mfm/addflight.png"} />
      <ProjectPic usage="phone" picture={"/mfm/postdashboard.pn"} />
    </Wrap>
  );
};

export default Mfm;
