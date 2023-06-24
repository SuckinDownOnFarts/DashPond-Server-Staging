import {
  IconNotification,
  IconBook,
  IconChartPie3,
  Icon3dCubeSphere,
  IconRotateClockwise,
  IconDatabaseCog,
  IconFileCode,
  IconCircleDotted,
  IconFlame,
  IconUser,
  IconUsers,
  IconBuilding,
  IconReportSearch,
  IconGauge,
  IconCookie,
  IconMessage2,
  IconLock,
  IconPlayerPlay,
  IconFileAnalytics,
  IconBusinessplan,
  IconCircleDashed,
  IconVersions,
  IconHelp,
  IconUrgent,
  IconFriends,
  IconBuildingEstate,
  IconBellSchool,
  IconCash,
  IconMapPin,
  IconColumns
} from '@tabler/icons-react';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const bufferData = [
  {
    bufferName: '3 Miles',
    value: 0
  },
  {
    bufferName: '5 Miles',
    value: 1
  },
  {
    bufferName: '10 Miles',
    value: 2
  },
];

export const pricingPlans = [
  {
    title: 'Solo',
    price: 11.99,
    baseDP: 2,
    priceHead: 'Starts at $11.99/Month',
    featureHead: "WHAT YOU'LL GET",
    features: [
      {
        feature: '10 Initial Data Profiles'
      },
      {
        feature: '2 Data Profiles Per Month'
      },
      {
        feature: '1 Agent Profile'
      },
      {
        feature: '24/7 Live Support'
      }
    ],
    buttonText: 'Get Started',
    gradient: 'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500',
    link: '/getstarted/solo/customize',
    isDisabled: false,
    icon: IconUser
  },
  {
    title: 'Team',
    price: null, //39.99?
    baseDP: 10,
    priceHead: 'Coming Soon',
    featureHead: "WHAT YOU'LL GET",
    features: [
      {
        feature: '40 Initial Data Profiles'
      },
      {
        feature: '8 Data Profiles Per Month'
      },
      {
        feature: '2+ Agent Profiles'
      },
      {
        feature: '24/7 Live Support'
      }
    ],
    buttonText: 'Coming Soon',
    gradient: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
    link: '/getstarted/team/customize',
    isDisabled: true,
    icon: IconUsers
  },
  {
    title: 'Agency',
    price: null, //119.99?
    baseDP: 40,
    priceHead: 'Coming Soon',
    featureHead: "WHAT YOU'LL GET",
    features: [
      {
        feature: '100 Initial Data Profiles'
      },
      {
        feature: '40 Data Profiles Per Month'
      },
      {
        feature: '20+ Agent Profiles'
      },
      {
        feature: '24/7 Live Support'
      }
    ],
    buttonText: 'Coming Soon',
    gradient: 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600',
    link: '/getstarted/agency/customize',
    isDisabled: true,
    icon: IconBuilding
  },
];

export const base = [
  {
    'Plan': 'solo',
    'Price': 11.99,
    'BaseInitial': 10,
    'BaseMonthly': 2
  },
  {
    'Plan': 'team',
    'Price': 'Coming Soon',
    'BaseInitial': 40,
    'BaseMonthly': 10
  },
  {
    'Plan': 'agency',
    'Price': 'Coming Soon',
    'BaseInitial': 100,
    'BaseMonthly': 40
  },
];

export const stateNames = [
  { label: 'Alabama', value: 'Alabama' },
  { label: 'Alaska', value: 'Alaska' },
  { label: 'Arizona', value: 'Arizona' },
  { label: 'Arkansas', value: 'Arkansas' },
  { label: 'California', value: 'California' },
  { label: 'Colorado', value: 'Colorado' },
  { label: 'Connecticut', value: 'Connecticut' },
  { label: 'Delaware', value: 'Delaware' },
  { label: 'Florida', value: 'Florida' },
  { label: 'Georgia', value: 'Georgia' },
  { label: 'Hawaii', value: 'Hawaii' },
  { label: 'Idaho', value: 'Idaho' },
  { label: 'Illinois', value: 'Illinois' },
  { label: 'Indiana', value: 'Indiana' },
  { label: 'Iowa', value: 'Iowa' },
  { label: 'Kansas', value: 'Kansas' },
  { label: 'Kentucky', value: 'Kentucky' },
  { label: 'Louisiana', value: 'Louisiana' },
  { label: 'Maine', value: 'Maine' },
  { label: 'Maryland', value: 'Maryland' },
  { label: 'Massachusetts', value: 'Massachusetts' },
  { label: 'Michigan', value: 'Michigan' },
  { label: 'Minnesota', value: 'Minnesota' },
  { label: 'Mississippi', value: 'Mississippi' },
  { label: 'Missouri', value: 'Missouri' },
  { label: 'Montana', value: 'Montana' },
  { label: 'Nebraska', value: 'Nebraska' },
  { label: 'Nevada', value: 'Nevada' },
  { label: 'New Hampshire', value: 'New Hampshire' },
  { label: 'New Jersey', value: 'New Jersey' },
  { label: 'New Mexico', value: 'New Mexico' },
  { label: 'New York', value: 'New York' },
  { label: 'North Carolina', value: 'North Carolina' },
  { label: 'North Dakota', value: 'North Dakota' },
  { label: 'Ohio', value: 'Ohio' },
  { label: 'Oklahoma', value: 'Oklahoma' },
  { label: 'Oregon', value: 'Oregon' },
  { label: 'Pennsylvania', value: 'Pennsylvania' },
  { label: 'Rhode Island', value: 'Rhode Island' },
  { label: 'South Carolina', value: 'South Carolina' },
  { label: 'South Dakota', value: 'South Dakota' },
  { label: 'Tennessee', value: 'Tennessee' },
  { label: 'Texas', value: 'Texas' },
  { label: 'Utah', value: 'Utah' },
  { label: 'Vermont', value: 'Vermont' },
  { label: 'Virginia', value: 'Virginia' },
  { label: 'Washington', value: 'Washington' },
  { label: 'West Virginia', value: 'West Virginia' },
  { label: 'Wisconsin', value: 'Wisconsin' },
  { label: 'Wyoming', value: 'Wyoming' }
];

export const medianHHIncomes = [
  [0, 9999],
  [10000, 14999],
  [15000, 24999],
  [25000, 34999],
  [35000, 49999],
  [50000, 74999],
  [75000, 99999],
  [100000, 149999],
  [150000, 199999],
  [200000, 1000000]
];

export const ageRanges = [
  [0, 4],
  [5, 9],
  [10, 14],
  [15, 19],
  [20, 24],
  [25, 34],
  [35, 44],
  [45, 54],
  [55, 59],
  [60, 64],
  [65, 74],
  [75, 84],
  [85, 100]
];

export const pricingSteps = [
  {
    label: 'Plans',
  },
  {
    label: 'Confirmation'
  },
  {
    label: 'Check Out'
  },
];

export const navbarFeatureList = [
  {
    icon: IconReportSearch,
    title: 'Insights',
    description: 'Drive high transaction volumes with critical insights',
  },
  {
    icon: IconRotateClockwise,
    title: 'Automatic Updates',
    description: 'Keep your clients up-to-date with constant data updates',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'We provide robust documentation to help keep our growing data products simple to use',
  },
  {
    icon: Icon3dCubeSphere,
    title: 'Integration',
    description: 'Seemlessly integrate our data products into any marketing format',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'Track crucial analytics on all client-facing products',
  },
  {
    icon: IconNotification,
    title: 'Accessibility',
    description: 'Simple to generate data products means less headaches for agents',
  },
];

export const features = [
  {
    icon: IconDatabaseCog,
    title: '500+ data insights',
    description: 'All packages are published under MIT license, you can use Mantine in any project',
  },
  {
    icon: IconFileCode,
    title: 'Dynamically generated reports',
    description: 'Build and export data reports that cover any demographic topic',
  },
  {
    icon: IconCircleDotted,
    title: 'Seemless integration',
    description:
      'Between static pdfs and custom web pages DasPond makes it easy to integrate marketing assets into any listings',
  },
  {
    icon: IconFlame,
    title: 'High fidelity assets',
    description:
      'Reporting templates designed by marketing experts, because your clients deserve the best',
  },
];

export const TableExampleData = [
  {
    "title": "Foundation",
    "author": "Isaac Asimov",
    "year": 1951,
    "reviews": {
      "positive": 2223,
      "negative": 259
    }
  },
  {
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "year": 1818,
    "reviews": {
      "positive": 5677,
      "negative": 1265
    }
  },
  {
    "title": "Solaris",
    "author": "Stanislaw Lem",
    "year": 1961,
    "reviews": {
      "positive": 3487,
      "negative": 1845
    }
  },
  {
    "title": "Dune",
    "author": "Frank Herbert",
    "year": 1965,
    "reviews": {
      "positive": 8576,
      "negative": 663
    }
  },
  {
    "title": "The Left Hand of Darkness",
    "author": "Ursula K. Le Guin",
    "year": 1969,
    "reviews": {
      "positive": 6631,
      "negative": 993
    }
  },
  {
    "title": "A Scanner Darkly",
    "author": "Philip K Dick",
    "year": 1977,
    "reviews": {
      "positive": 8124,
      "negative": 1847
    }
  }
];

export const pricingSegmentedControlData = [
  {
    value: 'monthly',
    label: 'Monthly'
  },
  {
    value: 'annually',
    label: 'Annually',
  }
];

export const tableData = [
  {
    firstName: 'Joseph',
    lastName: 'Hand',
    email: 'Joanny_Carter@yahoo.com',
    salary: 57752,
    jobTitle: 'Customer Directives Architect',
    startDate: '2022-12-28T20:59:36.586Z',
    signatureCatchPhrase: 'Front-line logistical service-desk',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/528.jpg',
  },
  {
    firstName: 'Paula',
    lastName: 'Kohler',
    email: 'Webster.Monahan68@yahoo.com',
    salary: 47029,
    jobTitle: 'Direct Configuration Agent',
    startDate: '2023-01-04T08:03:36.832Z',
    signatureCatchPhrase: 'Stand-alone non-volatile encoding',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/461.jpg',
  },
  {
    firstName: 'Domenic',
    lastName: 'Cassin',
    email: 'Roma_Nicolas7@hotmail.com',
    salary: 55602,
    jobTitle: 'Corporate Operations Planner',
    startDate: '2022-02-07T13:34:22.224Z',
    signatureCatchPhrase: 'Digitized asynchronous definition',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/787.jpg',
  },
  {
    firstName: 'Rey',
    lastName: 'Runte',
    email: 'Perry.Ferry@yahoo.com',
    salary: 88782,
    jobTitle: 'Direct Optimization Manager',
    startDate: '2022-10-02T00:14:02.192Z',
    signatureCatchPhrase: 'Automated next generation knowledge base',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/407.jpg',
  },
  {
    firstName: 'Buck',
    lastName: 'Mosciski',
    email: 'Alf_Lehner33@gmail.com',
    salary: 95101,
    jobTitle: 'Internal Mobility Orchestrator',
    startDate: '2022-11-14T10:56:33.026Z',
    signatureCatchPhrase: 'Ameliorated clear-thinking capacity',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/696.jpg',
  },
  {
    firstName: 'Johnson',
    lastName: 'Nitzsche',
    email: 'Emerson42@gmail.com',
    salary: 96104,
    jobTitle: 'Lead Accounts Director',
    startDate: '2022-08-12T22:15:41.531Z',
    signatureCatchPhrase: 'Down-sized scalable application',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/305.jpg',
  },
  {
    firstName: 'Silas',
    lastName: 'Hermiston',
    email: 'Jane_Hoeger42@gmail.com',
    salary: 64532,
    jobTitle: 'International Operations Consultant',
    startDate: '2022-06-03T16:42:52.698Z',
    signatureCatchPhrase: 'Face to face grid-enabled encryption',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1171.jpg',
  },
  {
    firstName: 'Kailey',
    lastName: 'Bergstrom',
    email: 'Bo_Brakus@hotmail.com',
    salary: 26096,
    jobTitle: 'Regional Web Planner',
    startDate: '2022-10-17T21:12:54.687Z',
    signatureCatchPhrase: 'Implemented bottom-line algorithm',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/914.jpg',
  },
  {
    firstName: 'Lilian',
    lastName: 'Tromp',
    email: 'Karson2@gmail.com',
    salary: 72692,
    jobTitle: 'Central Implementation Orchestrator',
    startDate: '2022-09-13T11:55:16.045Z',
    signatureCatchPhrase: 'Open-architected tangible moderator',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/151.jpg',
  },
  {
    firstName: 'Maxine',
    lastName: 'Schmidt',
    email: 'Quinton13@hotmail.com',
    salary: 89317,
    jobTitle: 'Principal Communications Orchestrator',
    startDate: '2022-07-01T07:29:03.182Z',
    signatureCatchPhrase: 'Focused intermediate groupware',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/102.jpg',
  },
  {
    firstName: 'Robyn',
    lastName: 'Stroman',
    email: 'Jorge.Wiegand27@gmail.com',
    salary: 9167,
    jobTitle: 'Internal Group Manager',
    startDate: '2022-09-04T16:39:46.068Z',
    signatureCatchPhrase: 'Open-architected upward-trending info-mediaries',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
  },
  {
    firstName: 'Asha',
    lastName: 'Rolfson',
    email: 'Randal15@hotmail.com',
    salary: 45363,
    jobTitle: 'District Integration Technician',
    startDate: '2022-11-14T16:19:21.814Z',
    signatureCatchPhrase: 'Visionary 6th generation definition',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/880.jpg',
  },
  {
    firstName: 'Serena',
    lastName: 'Reynolds',
    email: 'Prince91@yahoo.com',
    salary: 11166,
    jobTitle: 'Principal Accounts Strategist',
    startDate: '2022-08-03T03:54:24.200Z',
    signatureCatchPhrase: 'Robust attitude-oriented structure',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1219.jpg',
  },
  {
    firstName: 'Ulices',
    lastName: 'Buckridge',
    email: 'Geoffrey.Champlin@gmail.com',
    salary: 97400,
    jobTitle: 'Central Communications Designer',
    startDate: '2022-02-20T10:26:24.947Z',
    signatureCatchPhrase: 'Team-oriented leading edge utilisation',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/408.jpg',
  },
  {
    firstName: 'Paxton',
    lastName: 'Gottlieb',
    email: 'Leopoldo_Ondricka43@yahoo.com',
    salary: 84030,
    jobTitle: 'International Operations Producer',
    startDate: '2022-07-07T10:34:23.518Z',
    signatureCatchPhrase: 'Programmable uniform knowledge user',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/918.jpg',
  },
  {
    firstName: 'Monserrat',
    lastName: 'Walter',
    email: 'Concepcion.Brekke33@gmail.com',
    salary: 16797,
    jobTitle: 'Direct Marketing Planner',
    startDate: '2022-05-16T20:27:12.189Z',
    signatureCatchPhrase: 'Customizable motivating flexibility',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/578.jpg',
  },
  {
    firstName: 'Alva',
    lastName: 'Hodkiewicz',
    email: 'Sadie.Homenick@hotmail.com',
    salary: 48676,
    jobTitle: 'Future Factors Associate',
    startDate: '2022-12-20T16:49:15.685Z',
    signatureCatchPhrase: 'Customizable even-keeled methodology',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1106.jpg',
  },
  {
    firstName: 'Marc',
    lastName: 'Willms',
    email: 'Gaetano_Sipes88@hotmail.com',
    salary: 21843,
    jobTitle: 'Lead Identity Liaison',
    startDate: '2023-01-09T09:13:15.011Z',
    signatureCatchPhrase: 'Optimized context-sensitive structure',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/331.jpg',
  },
  {
    firstName: 'Alexys',
    lastName: 'Hills',
    email: 'Duncan0@hotmail.com',
    salary: 67328,
    jobTitle: 'Human Infrastructure Liaison',
    startDate: '2022-10-25T14:07:34.391Z',
    signatureCatchPhrase: 'Multi-lateral 3rd generation analyzer',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/913.jpg',
  },
  {
    firstName: 'Annamae',
    lastName: 'Braun',
    email: 'Dolores_Reichel@gmail.com',
    salary: 76900,
    jobTitle: 'Principal Usability Consultant',
    startDate: '2022-07-28T19:35:28.462Z',
    signatureCatchPhrase: 'Ergonomic coherent utilisation',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1073.jpg',
  },
  {
    firstName: 'Cletus',
    lastName: 'Gleason',
    email: 'Tyson_Hackett0@hotmail.com',
    salary: 38627,
    jobTitle: 'District Paradigm Agent',
    startDate: '2022-06-20T10:51:23.449Z',
    signatureCatchPhrase: 'Monitored web-enabled support',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/274.jpg',
  },
  {
    firstName: 'Reinhold',
    lastName: 'Kunze',
    email: 'Ahmad.Effertz39@gmail.com',
    salary: 70691,
    jobTitle: 'Customer Intranet Consultant',
    startDate: '2022-10-28T04:52:20.153Z',
    signatureCatchPhrase: 'Multi-channelled static contingency',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1121.jpg',
  },
  {
    firstName: 'Gina',
    lastName: 'McGlynn',
    email: 'Chadrick84@yahoo.com',
    salary: 75478,
    jobTitle: 'National Mobility Specialist',
    startDate: '2022-03-05T01:27:19.980Z',
    signatureCatchPhrase: 'Public-key discrete encoding',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/485.jpg',
  },
  {
    firstName: 'Dejon',
    lastName: 'Considine',
    email: 'Percival96@hotmail.com',
    salary: 7438,
    jobTitle: 'Lead Response Specialist',
    startDate: '2022-10-16T13:08:23.224Z',
    signatureCatchPhrase: 'Sharable even-keeled archive',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/957.jpg',
  },
  {
    firstName: 'Ransom',
    lastName: 'Kerluke',
    email: 'Reymundo.Stanton74@yahoo.com',
    salary: 31847,
    jobTitle: 'National Assurance Consultant',
    startDate: '2022-10-07T13:08:31.062Z',
    signatureCatchPhrase: 'Virtual systematic hierarchy',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/447.jpg',
  },
  {
    firstName: 'Ken',
    lastName: 'Stiedemann',
    email: 'Chanel.Veum78@hotmail.com',
    salary: 93663,
    jobTitle: 'Lead Group Analyst',
    startDate: '2022-11-27T19:10:24.464Z',
    signatureCatchPhrase: 'Vision-oriented scalable challenge',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/780.jpg',
  },
  {
    firstName: 'Freda',
    lastName: 'Morissette',
    email: 'Micaela_Stamm96@hotmail.com',
    salary: 24774,
    jobTitle: 'Forward Web Technician',
    startDate: '2022-06-01T09:47:45.260Z',
    signatureCatchPhrase: 'De-engineered asymmetric infrastructure',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1137.jpg',
  },
];

export const secondFeatureSectionData = [
  {
    icon: IconGauge,
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
  },
  {
    icon: IconUser,
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
  },
  {
    icon: IconCookie,
    title: 'No third parties',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
  },
  {
    icon: IconLock,
    title: 'Secure by default',
    description:
      'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right',
  },
  {
    icon: IconMessage2,
    title: '24/7 Support',
    description:
      'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
  },
];

export const thirdFeatureSectionData = [
  {
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: IconGauge,
  },
  {
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: IconUser,
  },
  {
    title: 'No third parties',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconCookie,
  },
];

export const featureFooterData = [
  {
    "title": "About",
    "links": [
      {
        "label": "Features",
        "link": "#"
      },
      {
        "label": "Pricing",
        "link": "#"
      },
      {
        "label": "Support",
        "link": "#"
      },
      {
        "label": "Forums",
        "link": "#"
      }
    ]
  },
  {
    "title": "Project",
    "links": [
      {
        "label": "Contribute",
        "link": "#"
      },
      {
        "label": "Media assets",
        "link": "#"
      },
      {
        "label": "Changelog",
        "link": "#"
      },
      {
        "label": "Releases",
        "link": "#"
      }
    ]
  },
  {
    "title": "Community",
    "links": [
      {
        "label": "Join Discord",
        "link": "#"
      },
      {
        "label": "Follow on Twitter",
        "link": "#"
      },
      {
        "label": "Email newsletter",
        "link": "#"
      },
      {
        "label": "GitHub discussions",
        "link": "#"
      }
    ]
  }
];

export const docsHomeData = [
  {
    title: 'Getting Started',
    info: 'Familiarize yourself with the basics of creating data products, integrating products into your marketing, and maximizing insight effectiveness',
    link: '/getting+started',
    icon: IconPlayerPlay,
  },
  {
    title: 'Products',
    info: 'Explore our product offerings and learn how those products can enhance your real estate marketing',
    link: '/products',
    icon: IconFileAnalytics,
  },
  {
    title: 'Plans',
    info: "Determine which plan will best serve your individual, team or agency's needs",
    link: '/plans',
    icon: IconBusinessplan,
  },
  {
    title: 'Integrations',
    info: 'Master seamless product integration into any marketing strategy to ensure clients make successful purchasing and leasing decisions',
    link: '/integrations',
    icon: IconCircleDashed,
  },
  {
    title: 'Releases',
    info: 'Stay up to date on all our past, current, and future releases',
    link: '/releases',
    icon: IconVersions,
  },
  {
    title: 'Support',
    info: 'Get the most out of our products even when something is super fucked up and our shit don\'t work at all cause I made it when I was high',
    link: '/support',
    icon: IconHelp,
  },
];

export const dataProfileSidebarData = [
  { label: 'Key Trends', icon: IconUrgent },
  {
    label: 'Population Trends',
    icon: IconFriends,
    // initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Employment and Job Markets',
    icon: IconBuildingEstate,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Education Insights', icon: IconBellSchool },
  { label: 'Income and Earnings', icon: IconCash },
  // { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Map Views',
    icon: IconMapPin,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
  { label: 'Table Views', icon: IconColumns },
];