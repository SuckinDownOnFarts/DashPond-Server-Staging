//Layout
import Layout from './components/LayoutGlobals/Layout';

//Screens
import Home from './Screens/Home';
import DataProfile from './Screens/DataProfile/DataProfile';
import Missing from './Screens/Missing';
import Contact from './Screens/Contact';
import Docs from './Screens/Docs/Docs';

//Creat Dashboards
import AddressInput from './Screens/CreateDash/AddressInput';
import DashLayout from './Screens/CreateDash/DashLayout';
import FileUploader from './Screens/CreateDash/FileUploader';
import MapModal from './Screens/CreateDash/MapModal';

//Pricing Screens
import PricingPlan from './Screens/Pricing/PricingPlan';
import Pricing from './Screens/Pricing/Pricing';
import Checkout from './Screens/Pricing/Checkout';

//Property Insight Screens
import Overview from './Screens/DataProfile/Overview';

// Auth Screens
import Register from './Screens/AuthScreens/Register';
import Login from './Screens/AuthScreens/Login';
import RequireAuth from './components/Auth/RequireAuth';
import PersistLogin from './components/Auth/PersistLogin';
import PricingRequireAuth from './components/Auth/PricingRequireAuth';


//Profile Screens
import RequireProfileAuth from './components/Auth/RequireProfileAuth';
import ProfileLayout from './Screens/Profile/Layout';
import Info from './Screens/Profile/Info';
import Insights from './Screens/Profile/Insights';
import ProfilePlan from './Screens/Profile/Plan';
import DataProfiles from './Screens/Profile/DataProfiles';

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
                <Route path='dataprofiles' element={<DataProfiles />} />

              </Route>
            </Route>

          </Route> 
          
          <Route path='/dataprofile/:id' element={<DataProfile />}> {/* Dashboards */}
            <Route path='overview' index element={<Overview />} />
          </Route>

          <Route path='documentation' element={<Docs />} />

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
        </Route>

        {/* Login and Register Routes */}

      </Route>
    </Routes>
  );
}

export default App;
