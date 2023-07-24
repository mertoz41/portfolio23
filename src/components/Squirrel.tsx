import React from "react";
import { Wrap } from "@chakra-ui/react";
import ProjectPic from "./ProjectPic";

const Squirrel = () => {
  return (
    <Wrap
      display={"flex"}
      justify={{ base: "center", xl: "center" }}
      spacing="30px"
      overflowY={"auto"}
      padding={5}
    >
      <ProjectPic usage="squirrel" picture={"/squirrel/dashboard.jpg"} />
      <ProjectPic usage="squirrel" picture={"/squirrel/banking.jpg"} />
      <ProjectPic usage="squirrel" picture={"/squirrel/transfer.jpg"} />
      <ProjectPic usage="squirrel" picture={"/squirrel/checkout.jpg"} />
      <ProjectPic usage="squirrel" picture={"/squirrel/marketplace.jpg"} />
      <ProjectPic usage="squirrel" picture={"/squirrel/settings.jpg"} />
    </Wrap>
  );
};

export default Squirrel;
