/////////////////////////////////////////////**************LAYOUT*************///////////////////////////////////////////////////////////
import Layout from './components/LayoutGlobals/Layout';
/////////////////////////////////////////////**************SCREENS*************///////////////////////////////////////////////////////////
import Home from './Screens/Home';
import DPLayout from './Screens/DataProfile/Layout/DPLayout';
import Missing from './Screens/404/Missing';
import Contact from './Screens/Contact/Contact';
import Features from './Screens/Feautures/Features';
/////////////////////////////////////////////**************CREATE DATA PROFILE SCREENS*************///////////////////////////////////////////////////////////
import AddressInput from './Screens/CreateDash/AddressInput';
import DashLayout from './Screens/CreateDash/Layout/DashLayout';
import FileUploader from './Screens/CreateDash/FileUploader';
import MapModal from './Screens/CreateDash/MapModal';
/////////////////////////////////////////////**************PRICING SCREENS*************///////////////////////////////////////////////////////////
import PricingPlan from './Screens/Pricing/PricingPlan';
import Pricing from './Screens/Pricing/Pricing';
import Checkout from './Screens/Pricing/Checkout';
/////////////////////////////////////////////**************DATA PROFILE SCREENS*************///////////////////////////////////////////////////////////
import Overview from './Screens/DataProfile/Layout/Overview';
/////////////////////////////////////////////**************AUTH SCREENS*************///////////////////////////////////////////////////////////
import Register from './Screens/AuthScreens/Register';
import Login from './Screens/AuthScreens/Login';
import RequireAuth from './components/Auth/RequireAuth';
import PersistLogin from './components/Auth/PersistLogin';
import PricingRequireAuth from './components/Auth/PricingRequireAuth';
import AlreadyLoggedIn from './Screens/AuthScreens/AlreadyLoggedIn';
/////////////////////////////////////////////**************USER PROFILE SCREENS*************///////////////////////////////////////////////////////////
import RequireProfileAuth from './components/Auth/RequireProfileAuth';
import ProfileLayout from './Screens/Profile/Layout/Layout';
import Info from './Screens/Profile/Info';
import Insights from './Screens/Profile/Insights';
import ProfilePlan from './Screens/Profile/Plan';
import DataProfiles from './Screens/Profile/DataProfiles';
/////////////////////////////////////////////**************DOCUMENTATION SCREENS*************///////////////////////////////////////////////////////////
import DocsLayout from './Screens/Docs/Layout';
import Docs from './Screens/Docs/Docs';

import { Route, Routes } from 'react-router-dom';
import './App.css';

const ROLES = {
  'User': 10,
  'Customer': 12,
  'Admin': 11
}

function App() {
  return (
    <Routes>
      {/* Persisted Routes */}
      <Route element={<PersistLogin />}>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} /> {/* Homepage Route */}

          {/* Protected Route */}
          <Route element={<RequireAuth allowedRoles={[ROLES.Customer, ROLES.Admin]}/>}>
             <Route path='create' element={<DashLayout/>}> {/*Input for paying cutomers */}
              <Route path='address+input' element={<AddressInput/>} />
              <Route path='address+input/map+confirmation' element={<MapModal />} />
              <Route path='address+input/map+confirmation/image+upload' element={<FileUploader/>} /> 
            </Route>
          </Route> 
          
          {/* Profile Routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.Customer, ROLES.Admin, ROLES.User]}/>}> 
            <Route element={<RequireProfileAuth />}>
              <Route path='profile/:id' element={<ProfileLayout />}>
                <Route path='info' element={<Info />} />
                <Route path='insights' element={<Insights />} />
                <Route path='billing+plan' element={<ProfilePlan />} />
                <Route path='data+profiles' element={<DataProfiles />} />
              </Route>
            </Route>
          </Route> 
          
          <Route path='/dataprofile/:id' element={<DPLayout />}> {/* Dashboards */}
            <Route path='overview' index element={<Overview />} />
          </Route>

          <Route path='dashpond+features' element={<Features />} />

          <Route path='documentation' element={<DocsLayout />}>
            <Route path='documentation/first' element={<Docs />} />
          </Route>

          <Route path='pricing' element={<Pricing />} />

          <Route element={<PricingRequireAuth allowedRoles={[ROLES.Customer, ROLES.Admin, ROLES.User]}/>} >
            <Route path='getstarted/:plan/customize' element={<PricingPlan/>}/>
          </Route>
          
          <Route element={<PricingRequireAuth allowedRoles={[ROLES.Customer, ROLES.Admin, ROLES.User]}/>} >
            <Route path=':plan/checkout' element={<Checkout/>}/>
          </Route>

          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Missing />} /> {/* 404 Route */}

          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />} /> 
          <Route path='already+logged+in' element={<AlreadyLoggedIn />}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
