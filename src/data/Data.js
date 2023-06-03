import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
  } from '@tabler/icons-react';


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
      feature1: '10 Initial Data Profiles*',
      feature2: '2 Data Profiles Per Month*',
      feature3: '1 Agent Profile',
      feature4: '24/7 Live Support',
      buttonText: 'Get Started',
      gradient: 'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500',
      link: '/getstarted/solo/customize',
      isDisabled: false

  },
  {
      title: 'Team',
      price: null, //39.99?
      baseDP: 10,
      priceHead: 'Coming Soon',
      featureHead: "WHAT YOU'LL GET",
      feature1: '40 Initial Data Profiles*',
      feature2: '8 Data Profiles Per Month*',
      feature3: '2+ Agent Profiles*',
      feature4: '24/7 Live Support',
      buttonText: 'Coming Soon',
      gradient: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
      link: '/getstarted/team/customize',
      isDisabled: true
  },
  {
      title: 'Agency',
      price: null, //119.99?
      baseDP: 40,
      priceHead: 'Coming Soon',
      featureHead: "WHAT YOU'LL GET",
      feature1: '100 Initial Data Profiles*',
      feature2: '40 Data Profiles Per Month*',
      feature3: '20+ Agent Profiles*',
      feature4: '24/7 Live Support',
      buttonText: 'Coming Soon',
      gradient: 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600',
      link: '/getstarted/agency/customize',
      isDisabled: true
  },
]

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
]

export const profileSidebar = [
  {
    'title': 'Info',
    'link': 'info'
  },
  {
    'title': 'Insights',
    'link': 'insights'
  },
  {
    'title': 'Billing & Plan',
    'link': 'billing+plan'
  },
  {
    'title': 'Data Profiles',
    'link': 'dataprofiles'
  }
]

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

export const createDashSteps = [
    {
        label: 'Address',
    },
    {
        label: 'Map Confirmation'
    },
    {
        label: 'Upload Property Photo'
    },
]

export const profileTieredMenu = [
    {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Bookmark',
                        icon: 'pi pi-fw pi-bookmark'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                    }
                ]
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-user-plus'
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-user-minus'
            },
            {
                label: 'Search',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                            {
                                label: 'Print',
                                icon: 'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                    }
                ]
            }
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archive',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
  ];

  export const dataProfileMenuItems = [
    {label: 'Active Profiles', icon: 'pi pi-fw pi-home'},
    {label: 'Inactive Profiles', icon: 'pi pi-fw pi-eye-slash'},
  ];

export const accountInfoMenuItems = [
    {label: 'Personal Information', icon: 'pi pi-fw pi-user-edit'},
    {label: 'Payment Information', icon: 'pi pi-fw pi-dollar'},
    {label: 'Account Preferences', icon: 'pi pi-fw pi-id-card'},
    // {label: 'Inactive Profiles', icon: 'pi pi-fw pi-eye-slash'},
    // {label: 'Inactive Profiles', icon: 'pi pi-fw pi-eye-slash'},
  ];

  export const mockdata = [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
      icon: IconCoin,
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
      icon: IconBook,
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
      icon: IconFingerprint,
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
      icon: IconChartPie3,
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
      icon: IconNotification,
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
    },
  ];

export const BASE_URL = process.env.REACT_APP_BASE_URL;