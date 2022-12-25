import Layout from './components/Layout';
import Home from './Screens/Home';
import CreateDash from './Screens/CreateDash';
import DashPage from './Screens/DashPage';
import Missing from './Screens/Missing';
import Profile from './Screens/Profile';
import Register from './Screens/Register';
import Login from './Screens/Login';
import RequireAuth from './Screens/RequireAuth';

//Property Insight Screens
import Population from './Screens/PropertyScreens/Population';
import Overview from './Screens/PropertyScreens/Overview';
import Education from './Screens/PropertyScreens/Education';
import Employement from './Screens/PropertyScreens/Employement';
import Housing from './Screens/PropertyScreens/Housing';
import Income from './Screens/PropertyScreens/Income';
import PropertyInsights from './Screens/PropertyScreens/PropertyInsights';

import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  
  

  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        {/* Homepage Route */}
        <Route index element={<Home />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>

          {/* Dashboard APIs */}
          <Route path='create'>
            <Route index element={<CreateDash/>} />
            
          </Route>

          {/* User Routes */}
          <Route path='profile' element={<Profile />} />
        </Route> 

        {/* Dashboard */}


        {/* Auth and Register Routes */}
        <Route path='login' element={<Login />}/>
        <Route path='register' element={<Register />} />

        {/* Catch Route */}
        <Route path='*' element={<Missing />} />
      </Route>

      <Route path='/dashpage/:id' element={<DashPage />}>
        <Route path='overview' index element={<Overview />} />
        <Route path='population' element={<Population />}/>
        <Route path='housing' element={<Housing />}/>
        <Route path='income' element={<Income />}/>
        <Route path='education' element={<Education />}/>
        <Route path='employement' element={<Employement />}/>
        <Route path='information' element={<PropertyInsights />}/>
          
          
      </Route>

    </Routes>
  );
}

export default App;
