import { Icon } from '@chakra-ui/react';
import {MdHome, MdSecurity, MdOutlineCleaningServices, MdOutlineLocalHospital} from 'react-icons/md';

import { FaBed } from 'react-icons/fa';

import { GiPowerGenerator } from 'react-icons/gi';

// Admin Imports
import MainDashboard from 'pages/admin/default';
import Security from 'pages/admin/security';
import CTScan from 'pages/admin/ct-scan';
import Janitorial from 'pages/admin/janitorial';
import Hospital from 'pages/admin/hospital';
import MEPG from 'pages/admin/mepg';

import { IRoute } from 'types/navigation';

const routes: IRoute[] = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: 'Hospital',
    layout: '/admin',
    path: '/hospital',
    icon: (
        <Icon
            as={MdOutlineLocalHospital}
            width='20px'
            height='20px'
            color='inherit'
        />
    ),
    component: Hospital,
    secondary: true,
  },
  {
    name: 'Janitorial',
    layout: '/admin',
    path: '/janitorial',
    icon: (
      <Icon
        as={MdOutlineCleaningServices}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Janitorial,
    secondary: true,
  },
  {
    name: 'Security',
    layout: '/admin',
    path: '/security',
    icon: <Icon as={MdSecurity} width='20px' height='20px' color='inherit' />,
    component: Security,
  },
  {
    name: 'CT Scan',
    layout: '/admin',
    path: '/ct-scan',
    icon: <Icon as={FaBed} width='20px' height='20px' color='inherit' />,
    component: CTScan,
  },
  {
    name: 'MEPG',
    layout: '/admin',
    path: '/mepg',
    icon: (
      <Icon as={GiPowerGenerator} width='20px' height='20px' color='inherit' />
    ),
    component: MEPG,
  },
];

export default routes;
