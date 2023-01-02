
import { FiBarChart, FiCreditCard } from 'react-icons/fi';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsHouseDoor, BsPeople, BsBinoculars, BsBriefcase, BsBoxSeam, BsCurrencyDollar, BsShield } from 'react-icons/bs';
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
    {
      icon: <BsShield />,
      title: 'My Inbox',
      desc: 'Messages & Emails',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
    },
    {
      icon: <FiCreditCard />,
      title: 'My Tasks',
      desc: 'To-do and Daily Tasks',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
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

export const links = [
    {
      title: 'Key Insights',
      links: [
        {
          name: 'overview',
          icon: <BsBinoculars />,
        },
      ],
    },
  
    {
      title: 'Demographic Insights',
      links: [
        {
          name: 'population',
          icon: <BsPeople />,
        },
        {
          name: 'housing',
          icon: <BsHouseDoor />,
        },
        {
          name: 'income',
          icon: <FaRegMoneyBillAlt />,
        },
        {
          name: 'education',
          icon: <IoSchoolOutline />,
        },
        {
          name: 'employement',
          icon: <BsBriefcase />,
        },
      ],
    },
    {
      title: 'Property Details',
      links: [
        {
          name: 'information',
          icon: <AiOutlineCalendar />,
        },
      ],
    },
  ];

export const SparklineAreaData = [
    { x: 1, yval: 2 },
    { x: 2, yval: 6 },
    { x: 3, yval: 8 },
    { x: 4, yval: 5 },
    { x: 5, yval: 10 },
  
  ];

  const stackedChartData = [
    [
      { x: 'Jan', y: 111.1 },
      { x: 'Feb', y: 127.3 },
      { x: 'Mar', y: 143.4 },
      { x: 'Apr', y: 159.9 },
      { x: 'May', y: 159.9 },
      { x: 'Jun', y: 159.9 },
      { x: 'July', y: 159.9 },
    ],
    [
      { x: 'Jan', y: 111.1 },
      { x: 'Feb', y: 127.3 },
      { x: 'Mar', y: 143.4 },
      { x: 'Apr', y: 159.9 },
      { x: 'May', y: 159.9 },
      { x: 'Jun', y: 159.9 },
      { x: 'July', y: 159.9 },
    ],
  ];

export const stackedCustomSeries = [

    { dataSource: stackedChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Budget',
      type: 'StackingColumn',
      background: 'blue',
  
    },
  
    { dataSource: stackedChartData[1],
      xName: 'x',
      yName: 'y',
      name: 'Expense',
      type: 'StackingColumn',
      background: 'red',
  
    },
  
  ];

export const stackedPrimaryXAxis = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    labelIntersectAction: 'Rotate45',
    valueType: 'Category',
  };
  
export const stackedPrimaryYAxis = {
    lineStyle: { width: 0 },
    minimum: 100,
    maximum: 400,
    interval: 100,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}',
  };

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

