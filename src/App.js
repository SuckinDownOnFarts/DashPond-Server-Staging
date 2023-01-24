import Layout from './components/LayoutGlobals/Layout';

//Screens
import Home from './Screens/Home';
import CreateDash from './Screens/CreateDash';
import DashPage from './Screens/DashPage';
import Missing from './Screens/Missing';
import Profile from './Screens/Profile';
import Pricing from './Screens/Pricing';
import Contact from './Screens/Contact';
import About from './Screens/About';

//Property Insight Screens
import Population from './Screens/PropertyScreens/Population';
import Overview from './Screens/PropertyScreens/Overview';
import Housing from './Screens/PropertyScreens/Housing';
import Income from './Screens/PropertyScreens/Income';
import PropertyInsights from './Screens/PropertyScreens/PropertyInsights';

// Auth Screens
import Register from './Screens/AuthScreens/Register';
import Login from './Screens/AuthScreens/Login';
import RequireAuth from './components/Auth/RequireAuth';
import PersistLogin from './components/Auth/PersistLogin';

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
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} /> {/* Homepage Route */}

        {/* Persisted Routes */}
        <Route element={<PersistLogin />}>
    
          {/* Protected Route */}
          <Route element={<RequireAuth allowedRoles={[ROLES.Customer, ROLES.Admin]}/>}>
             <Route path='create' index element={<CreateDash/>} /> {/*Input for paying cutomers */}
          </Route> 
          
          {/* Protected Route */}
          <Route element={<RequireAuth allowedRoles={[ROLES.Customer, ROLES.Admin, ROLES.User]}/>}>
            <Route path='profile' element={<Profile />} /> {/* User Routes */}
          </Route> 
          
          <Route path='/dashpage/:id' element={<DashPage />}> {/* Dashboards */}
            <Route path='overview' index element={<Overview />} />
            <Route path='population' element={<Population />}/>
            <Route path='housing' element={<Housing />}/>
            <Route path='income' element={<Income />}/>
            <Route path='information' element={<PropertyInsights />}/>   
          </Route>

          <Route path='about' element={<About />} />
          <Route path='pricing' element={<Pricing />} /> {/* Pricing */}
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Missing />} /> {/* 404 Route */}

        </Route>

        {/* Login and Register Routes */}
        <Route path='login' element={<Login />}/>
        <Route path='register' element={<Register />} /> 
      </Route>
    </Routes>
  );
}

export default App;
