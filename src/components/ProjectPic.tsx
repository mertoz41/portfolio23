import React, { useState } from "react";
import { WrapItem, Image, Skeleton } from "@chakra-ui/react";
const ProjectPic = ({
  picture,
  folder,
}: {
  picture: string;
  folder: string;
}) => {
  const [picLoaded, setPicLoaded] = useState(false);
  const pictureSizeDictionary: any = {
    hooper: {
      width: { base: "280px", xl: "540px" },
      height: { base: "170px", xl: "280px" },
    },
    squirrel: {
      width: { base: "280px", xl: "400px" },
      height: { base: "220px", xl: "340px" },
    },
    cezs: { width: "220px", height: "480px" },
    mfm: { width: "220px", height: "480px" },
  };
  return (
    <WrapItem backgroundColor="#292929" padding={4} borderRadius={30}>
      <Skeleton
        h={
          picture.includes("Responsive")
            ? pictureSizeDictionary.cezs.height
            : pictureSizeDictionary[folder].height
        }
        w={
          picture.includes("Responsive")
            ? pictureSizeDictionary.cezs.width
            : pictureSizeDictionary[folder].width
        }
        startColor="#3e3e3e"
        endColor="#292929"
        borderRadius={10}
        isLoaded={picLoaded}
      >
        <Image
          src={`https://mert-portfolio-content.s3.amazonaws.com/${folder}/${picture}`}
          h={
            picture.includes("Responsive")
              ? pictureSizeDictionary.cezs.height
              : pictureSizeDictionary[folder].height
          }
          w={
            picture.includes("Responsive")
              ? pictureSizeDictionary.cezs.width
              : pictureSizeDictionary[folder].width
          }
          borderRadius={15}
          onLoad={() => setPicLoaded(true)}
        />
      </Skeleton>
    </WrapItem>
  );
};

export default ProjectPic;
