import React, { useState } from "react";
import { WrapItem, Image, Skeleton } from "@chakra-ui/react";
const ProjectPic = ({ picture, usage }: { picture: any; usage: string }) => {
  const [picLoaded, setPicLoaded] = useState(false);
  const pictureSizeDictionary: any = {
    phone: { width: "220px", height: "480px" },
    hooper: {
      width: { base: "280px", xl: "540px" },
      height: { base: "170px", xl: "280px" },
    },
    squirrel: {
      width: { base: "280px", xl: "400px" },
      height: { base: "220px", xl: "340px" },
    },
  };
  return (
    <WrapItem backgroundColor="#292929" padding={4} borderRadius={30}>
      {usage === "phone" ? (
        <Skeleton
          h={pictureSizeDictionary[usage].height}
          w={pictureSizeDictionary[usage].width}
          startColor="#3e3e3e"
          endColor="#292929"
          borderRadius={10}
          isLoaded={picLoaded}
        >
          <Image
            src={picture}
            h={pictureSizeDictionary[usage].height}
            w={pictureSizeDictionary[usage].width}
            borderRadius={15}
            onLoad={() => setPicLoaded(true)}
          />
        </Skeleton>
      ) : (
        <Skeleton
          h={{
            base: pictureSizeDictionary[usage].height.base,
            xl: pictureSizeDictionary[usage].height.xl,
          }}
          w={{
            base: pictureSizeDictionary[usage].width.base,
            xl: pictureSizeDictionary[usage].width.xl,
          }}
          startColor="#3e3e3e"
          endColor="#292929"
          borderRadius={10}
          isLoaded={picLoaded}
        >
          <Image
            src={picture}
            h={{
              base: pictureSizeDictionary[usage].height.base,
              xl: pictureSizeDictionary[usage].height.xl,
            }}
            w={{
              base: pictureSizeDictionary[usage].width.base,
              xl: pictureSizeDictionary[usage].width.xl,
            }}
            borderRadius={15}
            onLoad={() => setPicLoaded(true)}
          />
        </Skeleton>
      )}
    </WrapItem>
  );
};

export default ProjectPic;
