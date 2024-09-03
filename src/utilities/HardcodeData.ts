const cloudurl = "https://d1b90agdfvsto3.cloudfront.net";
const projects: any = {
  cezs: {
    title: "Cezs",
    name: "cezs",
    description:
      "Social network designed for instrumentalists that combines maps with a music library to help users network through geolocation and music taste. While users build their portfolios and contribute to the library, maps display nearby events posted by users as well as musicians to collaborate.",
    techStack:
      "Ruby on Rails, WebSockets, PostgreSQL, React Native, Redux, AWS (S3, CloudFront), JSON Web Tokens",
    liveLink: "https://apps.apple.com/us/app/cezs/id6450903389",
    picture: "/cezs/fifth.png",
    pictures: [
      `${cloudurl}/cezs/fifth.png`,
      `${cloudurl}/cezs/first.png`,
      `${cloudurl}/cezs/fourth.png`,
      `${cloudurl}/cezs/second.png`,
      `${cloudurl}/cezs/sixth.png`,
      `${cloudurl}/cezs/third.png`,
    ],
    code: "https://github.com/mertoz41/parlay-builder-server",
  },
  squirrel: {
    title: "Squirrel",
    name: "squirrel",
    liveLink: "https://squirreledu.co/",
    description:
      "Banking app designed to teach scholars financial literacy, built for an EdTech startup in Abu Dhabi. Allows teachers to deposit money into students accounts, transfer between accounts, simulates weekly payments and randomized real-life events, and a marketplace to customize students' avatar.",
    techStack:
      "Django, Graphql, Django Hordak, React, TypeScript, React Testing Library",
    pictures: [
      `${cloudurl}/squirrel/banking.jpg`,
      `${cloudurl}/squirrel/checkout.jpg`,
      `${cloudurl}/squirrel/dashboard.jpg`,
      `${cloudurl}/squirrel/marketplace.jpg`,
      `${cloudurl}/squirrel/settings.jpg`,
      `${cloudurl}/squirrel/transfer.jpg`,
    ],
    picType: "jpg",
    picture: "/squirrel/banking.jpg",
    width: 400,
  },
  mfm: {
    title: "Miles for Military",
    name: "mfm",
    liveLink: "https://www.milesformilitary.org/",
    description:
      "App for active duty military members to redeem their volunteer hours in exchange for a flight home.",
    techStack: "Django, React, TypeScript",
    pictures: [
      `${cloudurl}/mfm/addflight.png`,
      `${cloudurl}/mfm/addHours.png`,
      `${cloudurl}/mfm/dashboard.png`,
      `${cloudurl}/mfm/login.png`,
      `${cloudurl}/mfm/postdashboard.png`,
      `${cloudurl}/mfm/register.png`,
    ],

    picType: "png",
    width: 400,
  },
  parlaybuilder: {
    title: "NBA Stats Scraper",
    name: "parlaybuilder",
    description:
      "A web scraping project that scrapes and displays statistics from multiple websites, tailored for NBA sports bettors.",
    techStack: "Django, Beautiful Soup, Pandas, React, Chakra UI",
    liveLink: "https://master--silver-pika-ad269b.netlify.app/",
    code: "https://github.com/mertoz41/parlay-builder-server",
    pictures: [
      `${cloudurl}/parlaybuilder/pbhomephone.png`,
      `${cloudurl}/parlaybuilder/tbplayerphone.png`,
      `${cloudurl}/parlaybuilder/pbteamphone.png`,
    ],
    picType: "png",
    picture: "/parlaybuilder/pbhomephone.png",
    width: 400,
  },
};

const frontendData: any[] = [
  "html",
  "css",
  "javascript",
  "typescript",
  "React",
  "redux",
];
const backendData: any[] = ["python", "django", "ruby", "rails"];
export { projects, backendData, frontendData };
