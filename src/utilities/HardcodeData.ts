const cloudurl = "https://d1b90agdfvsto3.cloudfront.net";
const projects: any = {
  cezs: {
    title: "Cezs",
    name: "cezs",
    description:
      "Musicians platform focused on instruments and music as performing arts, built as a side hustle when I observed that current musicians platforms are inconvenient for instrumentalists with sound files and by music made on laptops. Provides a catalog which users contribute to as they build their portfolios and maps to explore musicians around to collaborate and pinpoint upcoming gigs. Provides a catalog which users contribute to as they build their portfolios and maps to explore musicians around to collaborate and pinpoint upcoming gigs. Used Ruby on Rails to build a RESTful API in the backend, utilized ActionCable for real time features, AWS S3 through ActiveStorage to store user videos, and Json Web Tokens for authentication while I built the frontend with Expo managed React Native and utilized Redux to manage app state.",
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
      "Banking app for an edtech startup based in Abu Dhabi with a goal to teach scholars financial literacy as early as possible. Simulates deposits sent by teachers, transferring money between checking, saving, and emergency accounts, randomized real life events, weekly payments such as transportation cost, desk rent, and school fee, and a marketplace to purchase items to customize students' avatar. I led the frontend development of the project using TypeScript/React and wrote component testing for business logic. Learned working with GraphQL APIs and wrote queries and mutations In a Django/Python codebase.",
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
      " App that earns Military servicemembers flights back home for volunteer work. Assisted in frontend functionalty in a React/TypeScript codebase, wrote GraphQL queries and mutations in a Django/Python backend.",
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
      "NBA parlay builder app that displays todays games, mvp ladder, rosters sorted by points, as well as players' season stats, last 5 games, and last 5 games against the next opponent to help users with their parlays. Django app scrapes basketball-reference.com, statmuse.com, and foxsports.com using Beautiful Soup and returns necessary data in dataframes with Pandas. Chakra UI is utilized in the frontend for responsive design.",
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
