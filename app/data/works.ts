export const selectedWorks = [
  {
    id: 1,
    company: 'Linknet',
    year: '2023 - 2025',
    companyDescription: 'Internet provider, Indonesia',
    works: [
      {
        id: 1,
        title: 'First Media Website',
        description: `First Media is one of the largest internet providers in Indonesia, with hundreds of thousands of monthly web visits. As an external vendor, I fully managed the company’s website and its custom internal CMS. My work included developing the self-registration module, building dynamic marketing pages, fixing bugs in existing features and revamping key pages including the homepage to improve performance and user experience. I also enhanced multiple CMS modules to better support internal staff and marketing teams, and handled backend tasks related to the features I built.

        A key challenge was dealing with incomplete or frequently changing requirements. To address this, I carefully reviewed designs, asked clarifying questions, and gathered additional information before developing new features, ensuring the final output matched expectations.`,
        stack:
          'React ▪ Next ▪ Typescript ▪ Jest ▪ React Testing Library ▪ Nest ▪ Redis ▪ Docker',
        images: [
          {
            id: 1,
            src: '/images/fm-1.png',
            alt: 'First Media',
          },
          {
            id: 2,
            src: '/images/fm-2.png',
            alt: 'First Media',
          },
          {
            id: 3,
            src: '/images/fm-3.png',
            alt: 'First Media',
          },
        ],
      },
    ],
    position: 'Fullstack',
  },
  {
    id: 2,
    company: 'Parcel Daily',
    year: '2024',
    companyDescription: 'Courier and delivery platform, Malaysia',
    works: [
      {
        id: 1,
        title: 'Parcel Daily Customer Platform',
        description: `This platform is used by customers (partners) to access Parcel Daily’s services. The existing platform was built with Vue but had an outdated design and tech stack. The company decided to revamp it with a new design, new stack and streamlined user flows. I was brought in to help migrate features from the old platform to the new one, working closely with the existing developer.

        A key challenge was understanding the context of each feature from the old platform. I reviewed the legacy code, tested existing features, and then reimplemented them in the new platform with the updated design. The migration was a success, with nearly half of the user base switching to the new platform within two weeks.`,
        stack: 'React ▪ Vue ▪ Next ▪ Typescript ▪ Tailwind',
        images: [
          {
            id: 1,
            src: '/images/pd-1.png',
            alt: 'Parcel Daily',
          },
          {
            id: 2,
            src: '/images/pd-2.png',
            alt: 'Parcel Daily',
          },
          {
            id: 3,
            src: '/images/pd-3.png',
            alt: 'Parcel Daily',
          },
        ],
      },
    ],
    position: 'Frontend',
  },
]

export const allWorks = [
  {
    id: 1,
    company: 'RightCliq Solutions',
    year: '2023 - Now',
    companyDescription: 'Software development, Malaysia',
    works: [
      {
        id: 1,
        title: 'E-Learning App for a Private University',
        description: `This multiplatform app (Android, iOS, HarmonyOS) started with two developers, but after the first six months, I handled the entire app side. When I joined this project, feature delivery was painfully slow, every new build required testers to reinstall APKs/IPAs, wasting hours. Drawing from my past experience, I built a proof-of-concept using CodePush to deliver updates instantly without full releases. After some extra late-night tinkering, the demo won the team over, and we cut delivery time by nearly 50%.

        Another challenge was adjusting the UI for different orientations and ensuring responsiveness across multiple screen sizes, from phones to medium and large tablets. This required careful layout adjustments and thorough testing to maintain a consistent user experience.

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
  {
    id: 2,
    company: 'Linknet',
    year: '2023 - 2025',
    companyDescription: 'Internet provider, Indonesia',
    works: [
      {
        id: 1,
        title: 'First Media Website',
        description: `First Media is one of the largest internet providers in Indonesia, with hundreds of thousands of monthly web visits. As an external vendor, I fully managed the company’s website and its custom internal CMS. My work included developing the self-registration module, building dynamic marketing pages, fixing bugs in existing features and revamping key pages including the homepage to improve performance and user experience. I also enhanced multiple CMS modules to better support internal staff and marketing teams, and handled backend tasks related to the features I built.

        A key challenge was dealing with incomplete or frequently changing requirements. To address this, I carefully reviewed designs, asked clarifying questions, and gathered additional information before developing new features, ensuring the final output matched expectations.`,
        stack:
          'React ▪ Next ▪ Typescript ▪ Jest ▪ React Testing Library ▪ Nest ▪ Redis ▪ Docker',
        images: [
          {
            id: 1,
            src: '/images/fm-1.png',
            alt: 'First Media',
          },
          {
            id: 2,
            src: '/images/fm-2.png',
            alt: 'First Media',
          },
          {
            id: 3,
            src: '/images/fm-3.png',
            alt: 'First Media',
          },
        ],
      },
      {
        id: 2,
        title: 'Suara Pembaruan Website',
        description: `Suara Pembaruan is a news portal where I was hired to maintain the website and its CMS. My responsibilities included monitoring and maintaining the web container to ensure smooth operations, as well as fixing bugs on both the news portal and its CMS.

        One challenge was that it was my first time managing a web container, and the CMS was built with SolidJS, a library I had never used before. Through quick learning and hands-on problem solving, I was able to work effectively on the CMS and resolve issues without disruption.`,
        stack: 'Solid ▪ Vue ▪ Nuxt ▪ Typescript ▪ Parse ▪ Docker ▪ Portainer',
        images: [],
      },
    ],
    position: 'Fullstack',
  },
  {
    id: 3,
    company: 'Parcel Daily',
    year: '2024',
    companyDescription: 'Courier and delivery platform, Malaysia',
    works: [
      {
        id: 1,
        title: 'Parcel Daily Customer Platform',
        description: `This platform is used by customers (partners) to access Parcel Daily’s services. The existing platform was built with Vue but had an outdated design and tech stack. The company decided to revamp it with a new design, new stack and streamlined user flows. I was brought in to help migrate features from the old platform to the new one, working closely with the existing developer.

        A key challenge was understanding the context of each feature from the old platform. I reviewed the legacy code, tested existing features, and then reimplemented them in the new platform with the updated design. The migration was a success, with nearly half of the user base switching to the new platform within two weeks.`,
        stack: 'React ▪ Vue ▪ Next ▪ Typescript ▪ Tailwind',
        images: [
          {
            id: 1,
            src: '/images/pd-1.png',
            alt: 'Parcel Daily',
          },
          {
            id: 2,
            src: '/images/pd-2.png',
            alt: 'Parcel Daily',
          },
          {
            id: 3,
            src: '/images/pd-3.png',
            alt: 'Parcel Daily',
          },
        ],
      },
    ],
    position: 'Frontend',
  },
  {
    id: 4,
    company: 'Stealth Startup',
    year: '2024',
    companyDescription: 'Cybersecurity, Indonesia',
    works: [
      {
        id: 1,
        title: 'Security Compliance Platform',
        description: `I was hired to help build a new platform for managing security compliance and risk management for companies. One challenge during development was the inconsistent code style, some existing modules used clean architecture, while others followed a more common approach. After careful review, I chose the more common approach for new modules. While clean architecture looked appealing, its implementation was overly complex, taking almost twice as many steps for the same functionality, and risked over-engineering the solution.

        Another challenge was that certain design components didn’t align with the existing component library. To address this, I manually adjusted the default components to match the intended design, ensuring visual consistency across the platform.`,
        stack: 'React ▪ Next ▪ Typescript',
        images: [],
      },
    ],
    position: 'Frontend',
  },
  {
    id: 5,
    company: 'Warung Pintar',
    year: '2020 - 2023',
    companyDescription: 'Micro retail and distribution, Indonesia',
    works: [
      {
        id: 1,
        title: 'Trade Marketing Squad',
        description: `This was the first squad I joined at Warung Pintar. For a period of time, I was the only engineer in the squad, handling all feature development on both the app side and internal CMS while collaborating with the product manager, data analyst, and product operations team.

        Key projects included:
        Iklan Pintar - a platform for brands to advertise in the traditional trade market, providing additional income for small shop owners.
        Trader Center Sales App - a tool for the sales team to manage trader (large-scale buyer) visit schedules and purchasing activities.

        One challenge early on was ensuring requirements were technically feasible, especially while working as the sole engineer. I addressed this by actively coordinating with engineers from other squads to validate technical possibilities before development.`,
        stack: 'React ▪ React Native ▪ Next ▪ Typescript',
        images: [],
      },
      {
        id: 2,
        title: 'Core & Acquisition Squad',
        description: `In this squad, I worked on integrating a third-party service for analytics and customer engagement into the main app, Aplikasi Warung Pintar. Although the integration wasn’t initially my responsibility, I noticed ongoing issues in daily standups and offered to help. After tinkering, running trial-and-error tests, and collaborating with the third-party integration engineer, I successfully resolved the problems and completed the integration. I also contributed to acquisition-related features, including onboarding and the help section.

        During this period, I initiated and contributed to the development of Renceng Native, a new React Native UI kit for the main app collaborated with UI/UX and frontend chapter. The existing UI kit had no active maintainers, limited documentation, and issues with certain components, especially during unit testing. I proposed building a replacement that addressed these problems. After the initial development, more engineers joined the effort, and we released an early version. The migration from the old UI kit to the new one was smooth because we maintained the same API/usage, minimizing code changes in the main app. To further improve the developer experience, I integrated Storybook, enabling the team to view component documentation and usage examples without manually checking the source code.`,
        stack:
          'React ▪ React Native ▪ Next ▪ Typescript ▪ Jest ▪ React Native Testing Library ▪ Storybook',
        images: [],
      },
    ],
    position: 'Frontend',
  },
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
