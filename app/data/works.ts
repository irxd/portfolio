export const selectedWorks = [
  {
    id: 1,
    company: 'First Media',
    year: '2025',
    companyDescription: 'Internet provider, Indonesia',
    works: [],
    // workDescription:
    //   'Developed and maintained firstmedia main website, revamped key promotional pages including homepage, resulting in improved performance and user experience. Enhanced multiple modules within custom internal CMS, supporting internal staff and marketing needs.',
    position: 'Fullstack',
    // stack: 'React ▪ Next ▪ Typescript ▪ Jest ▪ Nest ▪ Redis ▪ Docker',
    // // images: [
    // //   {
    // //     id: 1,
    // //     src: '/images/fm-1.png',
    // //     alt: 'First Media',
    // //   },
    // //   {
    // //     id: 2,
    // //     src: '/images/fm-2.png',
    // //     alt: 'First Media',
    // //   },
    // //   {
    // //     id: 3,
    // //     src: '/images/fm-3.png',
    // //     alt: 'First Media',
    // //   },
    // // ],
  },
  {
    id: 2,
    company: 'Parcel Daily',
    year: '2024',
    companyDescription: 'Delivery platform, Malaysia',
    works: [],
    // workDescription:
    //   'Collaborated with internal team to revamp the customer platform. Migrating features from vue to react codebase, improving overall user experience and increasing customer satisfaction by addressing pain points in the legacy platform.',
    position: 'Frontend',
    // stack: 'React ▪ Vue ▪ Next ▪ Typescript',
    // images: [
    //   {
    //     id: 1,
    //     src: '/images/pd-1.png',
    //     alt: 'Parcel Daily',
    //   },
    //   {
    //     id: 2,
    //     src: '/images/pd-2.png',
    //     alt: 'Parcel Daily',
    //   },
    //   {
    //     id: 3,
    //     src: '/images/pd-3.png',
    //     alt: 'Parcel Daily',
    //   },
    // ],
  },
]

export const allWorks = [
  {
    id: 1,
    company: 'RightCliq Solutions',
    year: '2023 - 2025',
    companyDescription: 'Software development, Malaysia',
    works: [
      {
        id: 1,
        title: 'E-Learning App for a Private University',
        description: `This multiplatform app (Android, iOS, HarmonyOS) started with two developers, but after the first six months, I handled the entire app side. When I joined this project, feature delivery was painfully slow, every new build required testers to reinstall APKs/IPAs, wasting hours. Drawing from my past experience, I built a proof-of-concept using CodePush to deliver updates instantly without full releases. After some extra late-night tinkering, the demo won the team over, and we cut delivery time by nearly 50%.

        The app also needed testing on HarmonyOS, but no one had a Huawei device. I dug into Huawei’s DevEco Studio, found an older version that allowed local emulation, and got it working after days of forum-hunting (with the help of translation tools). This let testers validate features on HarmonyOS without hardware.`,
        stack:
          'React Native ▪ Typescript ▪ Jest ▪ React Native Testing Library ▪ Firebase',
        images: [],
      },
      {
        id: 2,
        title: 'FMB App',
        description: `This app was delisted from Google Play for not meeting the minimum SDK requirements. The original vendor was no longer involved, so I was asked to update the minimum SDK version and resubmit. What looked like a quick fix turned into a major rescue. The app was built on an outdated React Native version (0.60.3), relied on class-based components, had messy code with stray comments and console logs, and was even missing run scripts in package.json. After numerous adjustments, I got it to build, updated the SDK, and successfully republished it to Google Play.

        The iOS version was in even worse shape, missing native files and unable to build and was also at risk of being delisted. I proposed a full migration to the latest React Native (0.79.5) for long-term maintainability. This involved refactoring the entire codebase from class-based to functional components, updating dependencies, and rebuilding all features with better readability, maintainability, and performance.

        The migration is still in progress.`,
        stack:
          'React Native  ▪ Typescript ▪ Jest ▪ React Native Testing Library ▪ Firebase',
        images: [],
      },
      {
        id: 3,
        title: 'Treasury Management System Web App for a Conglomerate Group',
        description: `When I joined, the project was over six months late, several modules were unfinished, and many existing ones didn’t meet requirements. The only other frontend developer struggled with a language barrier, making it hard to translate requirements into working features. Documentation was minimal, and most designs were rough excel sketches from the backend developer.

        I tackled this by carefully reviewing each task, clarifying terms with the backend developer, and sometimes proposing design adjustments to improve user experience. Within two months, the app went live successfully. Since then, I’ve been solely responsible for the web app development.`,
        stack: 'Vue',
        images: [],
      },
      {
        id: 4,
        title: 'BlockCert CMS & App',
        description: `The BlockCert CMS is used to manage secure certificates for multiple organizations on the BlockCert platform. I took over the frontend work when no one else was working on it anymore. My tasks included rebranding the CMS, updating logos, color schemes, and image assets as well as enhancing several modules, including the reports and dashboard.

        The platform also has a companion mobile app for scanning QR codes on secure certificates. When I was tasked with rebranding it, I discovered there were two separate native apps. Kotlin for Android and Swift for iOS, languages I hadn’t worked with before. After researching and experimenting, I successfully rebranded both apps and submitted them to Google Play and the App Store.`,
        stack: 'Vue ▪ Kotlin ▪ Swift',
        images: [],
      },
    ],
    position: 'Frontend',
  },
  // {
  //   id: 2,
  //   company: 'Linknet',
  //   year: '2025',
  //   companyDescription: 'Internet provider, Indonesia',
  //   workDescription:
  //     'Collaborated with internal team to revamp the customer platform. Migrating features from vue to react codebase, improving overall user experience and increasing customer satisfaction by addressing pain points in the legacy platform.',
  //   position: 'Frontend',
  //   stack: 'React ▪ Vue ▪ Next ▪ Typescript',
  //   images: [
  //     {
  //       id: 1,
  //       src: '/images/pd-1.png',
  //       alt: 'Parcel Daily',
  //     },
  //     {
  //       id: 2,
  //       src: '/images/pd-2.png',
  //       alt: 'Parcel Daily',
  //     },
  //     {
  //       id: 3,
  //       src: '/images/pd-3.png',
  //       alt: 'Parcel Daily',
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   company: 'Parcel Daily',
  //   year: '2024',
  //   companyDescription: 'Courier and delivery platform, Malaysia',
  //   workDescription:
  //     'Collaborated with internal team to revamp the customer platform. Migrating features from vue to react codebase, improving overall user experience and increasing customer satisfaction by addressing pain points in the legacy platform.',
  //   position: 'Frontend',
  //   stack: 'React ▪ Vue ▪ Next ▪ Typescript',
  //   images: [],
  // },
  // {
  //   id: 4,
  //   company: 'Stealth Startup',
  //   year: '2024',
  //   companyDescription: 'Security compliance platform, Indonesia',
  //   workDescription:
  //     'Collaborated with internal team to revamp the customer platform. Migrating features from vue to react codebase, improving overall user experience and increasing customer satisfaction by addressing pain points in the legacy platform.',
  //   position: 'Frontend',
  //   stack: 'React ▪ Vue ▪ Next ▪ Typescript',
  //   images: [],
  // },
  // {
  //   id: 5,
  //   company: 'Warung Pintar',
  //   year: '2023',
  //   companyDescription: 'Micro retail and distribution, Indonesia',
  //   workDescription:
  //     'Collaborated with internal team to revamp the customer platform. Migrating features from vue to react codebase, improving overall user experience and increasing customer satisfaction by addressing pain points in the legacy platform.',
  //   position: 'Frontend',
  //   stack: 'React ▪ Vue ▪ Next ▪ Typescript',
  //   images: [],
  // },
  // {
  //   id: 6,
  //   company: 'Bizzy',
  //   year: '2020',
  //   companyDescription: 'B2B marketplace and e-procurement, Indonesia',
  //   workDescription:
  //     'Collaborated with internal team to revamp the customer platform. Migrating features from vue to react codebase, improving overall user experience and increasing customer satisfaction by addressing pain points in the legacy platform.',
  //   position: 'Frontend',
  //   stack: 'React ▪ Vue ▪ Next ▪ Typescript',
  //   images: [],
  // },
  // {
  //   id: 7,
  //   company: 'Babyloania',
  //   year: '2018',
  //   companyDescription: 'Rental marketplace for baby and kids products, Indonesia',
  //   workDescription:
  //     'Collaborated with internal team to revamp the customer platform. Migrating features from vue to react codebase, improving overall user experience and increasing customer satisfaction by addressing pain points in the legacy platform.',
  //   position: 'Frontend',
  //   stack: 'React ▪ Vue ▪ Next ▪ Typescript',
  //   images: [],
  // },
]
