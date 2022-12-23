import Layout from './components/Layout';
import Home from './Screens/Home';
import CreateDash from './Screens/CreateDash';
import DashPage from './Screens/DashPage';
import Missing from './Screens/Missing';
import Profile from './Screens/Profile';
import Register from './Screens/Register';
import Login from './Screens/Login';
import RequireAuth from './Screens/RequireAuth';
import DashPopulation from './Screens/DashPopulation';
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
          <Route path='population' element={<DashPopulation />}/>
          
          
      </Route>

    </Routes>
  );
}

export default App;
