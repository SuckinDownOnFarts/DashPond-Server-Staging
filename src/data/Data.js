
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
      desc: 'Account Settings',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
    },
    // {
    //   icon: <BsShield />,
    //   title: 'My Inbox',
    //   desc: 'Messages & Emails',
    //   iconColor: 'rgb(0, 194, 146)',
    //   iconBg: 'rgb(235, 250, 242)',
    // },
    // {
    //   icon: <FiCreditCard />,
    //   title: 'My Tasks',
    //   desc: 'To-do and Daily Tasks',
    //   iconColor: 'rgb(255, 244, 229)',
    //   iconBg: 'rgb(254, 201, 15)',
    // },
  ];

export const sidebarLinks = [
    {
      title: 'Key Insights',
      links: [
        {
          name: 'overview',
          link: 'overview',
          icon: <BsBinoculars />,
        },
      ],
    },
  
    {
      title: 'Demographic Insights',
      links: [
        {
          name: 'population',
          link: 'population',
          icon: <BsPeople />,
        },
        {
          name: 'housing',
          link: 'housing',
          icon: <BsHouseDoor />,
        },
        {
          name: 'income',
          link: 'income',
          icon: <FaRegMoneyBillAlt />,
        },
      ],
    },
    {
      title: 'Property Details',
      links: [
        {
          name: 'information',
          link: 'information',
          icon: <AiOutlineCalendar />,
        },
      ],
    },
  ];

export const salesPeople = [
    {
        name: 'Peter Doe',
        leads: 45,
        sales: '1,000,000',
        quota: '1,200,000',
        variance: 'low',
        region: 'Region A',
        status: 'overperforming',
        deltaType: 'moderateIncrease',
    },
    {
        name: 'Lena Whitehouse',
        leads: 35,
        sales: '900,000',
        quota: '1,000,000',
        variance: 'low',
        region: 'Region B',
        status: 'average',
        deltaType: 'unchanged',
    },
    {
        name: 'Phil Less',
        leads: 52,
        sales: '930,000',
        quota: '1,000,000',
        variance: 'medium',
        region: 'Region C',
        status: 'underperforming',
        deltaType: 'moderateDecrease',
    },
    {
        name: 'John Camper',
        leads: 22,
        sales: '390,000',
        quota: '250,000',
        variance: 'low',
        region: 'Region A',
        status: 'overperforming',
        deltaType: 'increase',
    },
    {
        name: 'Max Balmoore',
        leads: 49,
        sales: '860,000',
        quota: '750,000',
        variance: 'low',
        region: 'Region B',
        status: 'overperforming',
        deltaType: 'increase',
    },
    {
        name: 'Peter Moore',
        leads: 82,
        sales: '1,460,000',
        quota: '1,500,000',
        variance: 'low',
        region: 'Region A',
        status: 'average',
        deltaType: 'unchanged',
    },
    {
        name: 'Joe Sachs',
        leads: 49,
        sales: '1,230,000',
        quota: '1,800,000',
        variance: 'medium',
        region: 'Region B',
        status: 'underperforming',
        deltaType: 'moderateDecrease',
    },
  ];

export const performance = [
    {
        date: '2021-01-01', Sales: 900.73, Profit: 173, Customers: 73,
    },
    {
        date: '2021-01-02', Sales: 1000.74, Profit: 174.6, Customers: 74,
    },
    // ...
    {
        date: '2021-03-13', Sales: 882, Profit: 682, Customers: 682,
    },
  ];

export const kpiData = [
    {
        title: 'Sales',
        metric: '$ 12,699',
        progress: 15.9,
        target: '$ 80,000',
        delta: '13.2%',
        deltaType: 'moderateIncrease',
    },
    {
        title: 'Profit',
        metric: '$ 45,564',
        progress: 36.5,
        target: '$ 125,000',
        delta: '23.9%',
        deltaType: 'increase',
    },
    {
        title: 'Customers',
        metric: '1,072',
        progress: 53.6,
        target: '2,000',
        delta: '10.1%',
        deltaType: 'moderateDecrease',
    },
  ];

export const earningData = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: '39,354',
      percentage: '-4%',
      title: 'Customers',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <BsBoxSeam />,
      amount: '4,396',
      percentage: '+23%',
      title: 'Products',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
    },
    {
      icon: <FiBarChart />,
      amount: '423,39',
      percentage: '+38%',
      title: 'Sales',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
  
      pcColor: 'green-600',
    },
    {
      icon: <HiOutlineRefresh />,
      amount: '39,354',
      percentage: '-12%',
      title: 'Refunds',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      pcColor: 'red-600',
    },
  ];

  export const themeColors = [
    {
      name: 'blue-theme',
      color: '#1A97F5',
    },
    {
      name: 'green-theme',
      color: '#03C9D7',
    },
    {
      name: 'purple-theme',
      color: '#7352FF',
    },
    {
      name: 'red-theme',
      color: '#FF5C8E',
    },
    {
      name: 'indigo-theme',
      color: '#1E4DB7',
    },
    {
      color: '#FB9678',
      name: 'orange-theme',
    },
  ];

export const pricingPlans = [
  {
      name: 'Easy',
      description: 'All the basics for businesses that are just getting started.',
      price: {
      monthly: 29,
      annually: 29 * 12 - 199,
      },
      features: ['One project', 'Your dashboard'],
  },
  {
      name: 'Basic',
      description: 'Better for growing businesses that want more customers.',
      price: {
      monthly: 59,
      annually: 59 * 12 - 100,
      },
      features: ['Two projects', 'Your dashboard', 'Components included', 'Advanced charts'],
  },
  {
      name: 'Custom',
      description: 'Advanced features for pros who need more customization.',
      price: {
      monthly: 139,
      annually: 139 * 12 - 100,
      },
      features: ['Unlimited projects', 'Your dashboard', '+300 Components', 'Chat support'],
  },
];

