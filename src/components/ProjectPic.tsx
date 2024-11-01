import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import SimpleImageSlider from "react-simple-image-slider";

const ProjectPic = ({ picture, name }: { picture: any; name: string }) => {
  const pictureSizeDictionary: any = {
    squirrel: {
      width: { base: 350, xl: 560 },
      height: { base: 290, xl: 420 },
    },
    cezs: { width: { base: 1450, xl: 250 }, height: { base: 680, xl: 540 } },
    mfm: { width: { base: 400, xl: 300 }, height: { base: 550, xl: 500 } },
    parlaybuilder: {
      width: { base: "100%", xl: 220 },
      height: { base: 680, xl: 480 },
    },
  };
  return (
    <Flex >
      <Box
        position={"relative"}
        h={{
          base: pictureSizeDictionary[name].height.base,
          xl: pictureSizeDictionary[name].height.xl,
        }}
        w={{
          base: pictureSizeDictionary[name].width.base,
          xl: pictureSizeDictionary[name].width.xl,
        }}
        display={"block"}
      >
        <SimpleImageSlider
        autoPlay
          width="100%"
          height={"100%"}
          images={picture}
          showBullets={false}
          showNavs={false}
          bgColor="transparent"
        />
      </Box>
    </Flex>
  );
};

export default ProjectPic;
