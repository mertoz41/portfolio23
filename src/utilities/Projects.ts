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
      "For this website I used Next.js to make use of server side rendering for SEO purposes and it is hosted on Vercel's frontend cloud. Images are stored in a private AWS S3 bucket and delivered through AWS CloudFront to speed up distribution, and utilized Chakra UI as the responsive component library.",
    liveLink: "https://artstone-five.vercel.app/",
    pictures: ["one", "two", "three", "four"],
    picType: "png",
  },
  squirrel: {
    title: "squirrel",
    liveLink: "https://squirreledu.co/",
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
    liveLink: "https://www.milesformilitary.org/",
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
  "parlay-builder": {
    title: "parlaybuilder",
    description:
      "NBA parlay builder app that displays todays games, mvp ladder, rosters sorted by points, as well as players' season stats, last 5 games, and last 5 games against the next opponent to help users with their parlays.",
    description2:
      "Django app scrapes basketball-reference.com, statmuse.com, and foxsports.com using Beautiful Soup and returns necessary data in dataframes with Pandas. Chakra UI is utilized in the frontend for responsive design.",
    liveLink: "https://master--silver-pika-ad269b.netlify.app/",
    code: "https://github.com/mertoz41/parlay-builder-server",
    pictures: ["pbhomephone", "tbplayerphone", "pbteamphone"],
    picType: "png",
  },
};

export default projects;
