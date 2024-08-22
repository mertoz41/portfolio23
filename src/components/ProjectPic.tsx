import React, { useState } from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import SimpleImageSlider from "react-simple-image-slider";

const ProjectPic = ({ picture, name }: { picture: any; name: string }) => {
  const pictureSizeDictionary: any = {
    squirrel: {
      width: { base: "280px", xl: 560 },
      height: { base: "220px", xl: 420 },
    },
    cezs: { width: { base: 1450, xl: 250 }, height: { base: 380, xl: 540 } },
    mfm: { width: { base: 1450, xl: 300 }, height: { base: 1450, xl: 500 } },
    parlaybuilder: {
      width: { base: 1450, xl: 220 },
      height: { base: 1450, xl: 480 },
    },
  };
  return (
    <Flex>
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
          width="100%"
          height={"100%"}
          // width={pictureSizeDictionary[name].width.xl}
          // height={pictureSizeDictionary[name].height.xl}
          images={picture}
          showBullets={false}
          showNavs={true}
          bgColor="transparent"
        />
      </Box>
      {/* <Image
        src={`https://d1b90agdfvsto3.cloudfront.net${picture}`}
        h={{ xl: pictureSizeDictionary[name].height.xl }}
        w={{ xl: pictureSizeDictionary[name].width.xl }}
        borderRadius={15}
        alt={`${picture}-alt`}
      /> */}
    </Flex>
  );
};

export default ProjectPic;
