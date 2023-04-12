
import { FiBarChart } from 'react-icons/fi';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsHouseDoor, BsPeople, BsBinoculars, BsBriefcase, BsBoxSeam, BsCurrencyDollar } from 'react-icons/bs';
import { IoSchoolOutline } from 'react-icons/io5';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

export const userProfileData = [
    {
      icon: <BsCurrencyDollar />,
      title: 'My Profile',
      desc: 'Account Details',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
    },
  ];

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
  },
  // {
  //   'title': 'Logout',
  //   'link': 'logout'
  // }
]

export const stateNames = [
  { name: 'Alabama', abbrev: 'AL' },
  { name: 'Alaska', abbrev: 'AK' },
  { name: 'Arizona', abbrev: 'AZ' },
  { name: 'Arkansas', abbrev: 'AR' },
  { name: 'California', abbrev: 'CA' },
  { name: 'Colorado', abbrev: 'CO' },
  { name: 'Connecticut', abbrev: 'CT' },
  { name: 'Delaware', abbrev: 'DE' },
  { name: 'Florida', abbrev: 'FL' },
  { name: 'Georgia', abbrev: 'GA' },
  { name: 'Hawaii', abbrev: 'HI' },
  { name: 'Idaho', abbrev: 'ID' },
  { name: 'Illinois', abbrev: 'IL' },
  { name: 'Indiana', abbrev: 'IN' },
  { name: 'Iowa', abbrev: 'IA' },
  { name: 'Kansas', abbrev: 'KS' },
  { name: 'Kentucky', abbrev: 'KY' },
  { name: 'Louisiana', abbrev: 'LA' },
  { name: 'Maine', abbrev: 'ME' },
  { name: 'Maryland', abbrev: 'MD' },
  { name: 'Massachusetts', abbrev: 'MA' },
  { name: 'Michigan', abbrev: 'MI' },
  { name: 'Minnesota', abbrev: 'MN' },
  { name: 'Mississippi', abbrev: 'MS' },
  { name: 'Missouri', abbrev: 'MO' },
  { name: 'Montana', abbrev: 'MT' },
  { name: 'Nebraska', abbrev: 'NE' },
  { name: 'Nevada', abbrev: 'NV' },
  { name: 'New Hampshire', abbrev: 'NH' },
  { name: 'New Jersey', abbrev: 'NJ' },
  { name: 'New Mexico', abbrev: 'NM' },
  { name: 'New York', abbrev: 'NY' },
  { name: 'North Carolina', abbrev: 'NC' },
  { name: 'North Dakota', abbrev: 'ND' },
  { name: 'Ohio', abbrev: 'OH' },
  { name: 'Oklahoma', abbrev: 'OK' },
  { name: 'Oregon', abbrev: 'OR' },
  { name: 'Pennsylvania', abbrev: 'PA' },
  { name: 'Rhode Island', abbrev: 'RI' },
  { name: 'South Carolina', abbrev: 'SC' },
  { name: 'South Dakota', abbrev: 'SD' },
  { name: 'Tennessee', abbrev: 'TN' },
  { name: 'Texas', abbrev: 'TX' },
  { name: 'Utah', abbrev: 'UT' },
  { name: 'Vermont', abbrev: 'VT' },
  { name: 'Virginia', abbrev: 'VA' },
  { name: 'Washington', abbrev: 'WA' },
  { name: 'West Virginia', abbrev: 'WV' },
  { name: 'Wisconsin', abbrev: 'WI' },
  { name: 'Wyoming', abbrev: 'WY' }
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
]