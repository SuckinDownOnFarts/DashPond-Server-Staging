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
    IconColumns,
    IconChartArrows,
    IconBinaryTree,
    IconHome
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
        title: '500+ Data Insights',
        description: 'Leverage critical real estate decisions with a wide range of demographic indicators.',
    },
    {
        icon: IconFileCode,
        title: 'Unlimited Use Anywhere in the U.S.',
        description: 'We provide coverage for any property or land tract in the United States.',
    },
    {
        icon: IconCircleDotted,
        title: 'Simple to Use',
        description:
            'Simply type in the address or find it on the map and our application will generate a comprehensive report.',
    },
    {
        icon: IconFlame,
        title: 'A.I. Expanded Data',
        description:
            'Gain that competitve edge with A.I. enhanced demographic insights.',
    },
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
        title: 'Knowledge in Seconds',
        description:
            'Our web application transforms any address into market knowledge extremely fast while retaining low margins of error for extreme reliability.',
        icon: IconGauge,
    },
    {
        title: 'Justify your Decisions',
        description:
            'Our reports are specifically tailored to serve the most critical insights and help developers and investors to better understand a property before they pull the trigger.',
        icon: IconChartArrows,
    },
    {
        title: 'A.I. Expanded Data',
        description:
            'Peer farther into the future than traditional Census data with Artifical Intelligence powered projections up to the year 2050 on select insights.',
        icon: IconBinaryTree,
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
    { label: 'Key Trends', icon: IconUrgent, link: 'key+trends'},
    { label: 'Population Trends', icon: IconFriends, link: 'population' },
    { label: 'Income and Employment', icon: IconCash, link: 'employment+income' },
    // { label: 'Employment Insights', icon: IconBuildingEstate, link: 'employment+households' },
    { label: 'Education Insights', icon: IconBellSchool, link: 'education' },
    { label: 'Housing Insights', icon: IconHome, link: 'housing' },
    { label: 'Map Views', icon: IconMapPin, link: 'map+views' },
    // { label: 'Table Views', icon: IconColumns, link: 'tables' },
];