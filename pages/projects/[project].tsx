import React from "react";
import { Text, Flex, Image, Box, Wrap, Link } from "@chakra-ui/react";
import Head from "next/head";
import { animated, useSpring } from "@react-spring/web";
import { useRouter } from "next/router";
import ProjectPic from "@/components/ProjectPic";

const Project = () => {
  const router = useRouter();
  const [homeAnimation, animate] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));
  const projects: any = {
    cezs: {
      title: "cezs",
      description:
        "Musicians platform focused on instruments and music as performing arts, built as a side hustle when I observed that current musicians platforms are inconvenient for instrumentalists with sound files and by music made on laptops.",
      description2:
        "Provides a catalog which users contribute to as they build their portfolios and maps to explore musicians around to collaborate and pinpoint upcoming gigs. ",
      description3:
        "Used Ruby on Rails to build a RESTful API in the backend, utilized ActionCable for real time features, AWS S3 through ActiveStorage to store user videos, and Json Web Tokens for authentication while I built the frontend with Expo managed React Native and utilized Redux to manage app state.",
      liveLink: "https://apps.apple.com/us/app/cezs/id6450903389",
      pictures: ["fifth", "first", "fourth", "second", "sixth", "third"],
      picType: "png",
    },
    artstone: {
      title: "artstone",
      description:
        "Official website of a marble, granite, and quartz products supplier in the DMV area. Displays their stone catalog along with edges and sinks to go with, providing customers a one-stop shop to remodel their kitchens, bathrooms, and more.",
      description2:
        "For this website I used Next.js to make use of server side rendering for SEO purposes and it is hosted on Vercel's frontend cloud, which provides CDN out of the box. Images are stored in a private AWS S3 bucket and delivered through AWS CloudFront to speed up distribution, and utilized Chakra UI as the responsive component library.",
      liveLink: "https://artstone-five.vercel.app/",
      pictures: ["one", "two", "three", "four"],
      picType: "png",
    },
    squirrel: {
      title: "squirrel",
      description:
        "Banking app for an edtech startup based in Abu Dhabi with a goal to teach scholars financial literacy as early as possible. Simulates deposits sent by teachers, transferring money between checking, saving, and emergency accounts, randomized real life events, weekly payments such as transportation cost, desk rent, and school fee, and a marketplace to purchase items to customize students' avatar.",
      description2:
        "I led the frontend development of the project using TypeScript/React and wrote component testing for business logic. Learned working with GraphQL APIs and wrote queries and mutations In a Django/Python codebase.",
      embedId: "OmjkEZvZiHg",
      pictures: [
        "banking",
        "checkout",
        "dashboard",
        "marketplace",
        "settings",
        "transfer",
      ],
      picType: "jpg",
    },
    mfm: {
      title: "miles-for-military",
      description:
        " App that earns Military servicemembers flights back home for volunteer work. Assisted in frontend functionalty in a React/TypeScript codebase, wrote GraphQL queries and mutations in a Django/Python backend.",
      embedId: "tNyQDQ7cUEw",
      pictures: [
        "addflight",
        "addHours",
        "dashboard",
        "login",
        "postdashboard",
        "register",
      ],
      picType: "png",
    },
    "hooper-app": {
      title: "hooper-app",
      description:
        "Basketball app that displays basketball courts on the map and allows users to organize games through each locations forum. First project I got to build on my own in my coding journey as I wanted to work with maps. While brainstorming, I reminisced the days my friends and I wished a way to find others to hoop against in the city, then built it for the 10 year old me.",
      liveLink: "https://hooper-frontend.herokuapp.com/",
      code: "https://github.com/mertoz41/hooper-front-end",
      pictures: [
        "explore",
        "exploreResponsive",
        "location",
        "locationResponsive",
        "newcourt",
        "newcourtResponsive",
      ],
      picType: "png",
    },
  };
  const project = projects[`${router.query.project}`];

  const renderHeader = () => {
    return (
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent={"space-between"}
        m="0 auto"
        backdropFilter={"blur(8px)"}
        w={{ base: "90%", xl: "50%" }}
      >
        <Flex flexDirection="row" justifyContent="space-between" w="100%">
          {router.query.project === "cezs" ? (
            <Image
              src={"/icon.png"}
              boxSize={40}
              borderRadius={15}
              alt="cezs-icon"
            />
          ) : (
            <Text
              fontSize={{ base: 35, xl: 60 }}
              alignSelf={"flex-end"}
              fontWeight={300}
            >
              {project.title}
            </Text>
          )}
          {project.liveLink ? (
            <Link
              href={project.liveLink}
              alignSelf={"center"}
              marginRight={5}
              padding={2}
              borderRadius={20}
              borderWidth={2}
              target="_blank"
            >
              <Text fontSize={22} fontWeight={500}>
                Live link
              </Text>
            </Link>
          ) : null}
        </Flex>
      </Flex>
    );
  };

  const renderDescription = () => {
    return (
      <Flex flexDir={"column"}>
        <Text fontSize={22} fontWeight={300}>
          {project.description}
        </Text>
        {project.description2 && (
          <Text fontSize={22} fontWeight={300} marginTop={5}>
            {project.description2}
          </Text>
        )}
        {project.description3 && (
          <Text fontSize={22} fontWeight={300} marginTop={5}>
            {project.description3}
          </Text>
        )}
      </Flex>
    );
  };
  const renderPictures = () => {
    return (
      <Wrap
        display={"flex"}
        justify={{ base: "center", xl: "center" }}
        spacing="30px"
        overflowY={"auto"}
        padding={5}
      >
        {project.pictures.map((name: string, i: number) => (
          <ProjectPic
            folder={
              project.title === "miles-for-military"
                ? "mfm"
                : project.title === "hooper-app"
                ? "hooper"
                : project.title
            }
            picture={`${name}.${project.picType}`}
            key={i}
          />
        ))}
      </Wrap>
    );
  };

  return (
    <Box h="100vh" bg="#2e2e2e" overflowY={"auto"}>
      <Head>
        <title>{router.query.project}</title>
      </Head>
      <animated.div style={homeAnimation}>
        <Box color="white">
          {project && renderHeader()}
          <Flex
            m="0 auto"
            w={{ base: "90%", xl: "50%" }}
            justifyContent={"space-between"}
            flexDir={"column"}
          >
            {project && renderDescription()}
            {project && renderPictures()}
          </Flex>
        </Box>
      </animated.div>
    </Box>
  );
};

export default Project;
