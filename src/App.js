import Layout from './components/Layouts/Layout';
import Home from './components/Screens/Home';
import CreateDash from './components/Screens/CreateDash';
import DashPage from './components/Screens/DashPage';
import Missing from './components/Screens/Missing';
import Profile from './components/Screens/Profile';
import Register from './components/Screens/Register';
import Login from './components/Screens/Login';
import RequireAuth from './components/Screens/RequireAuth';
import { Route, Routes } from 'react-router-dom';


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

        <Route path='dashpage/:id' element={<DashPage />} />

        {/* Auth and Register Routes */}
        <Route path='login' element={<Login />}/>
        <Route path='register' element={<Register />} />

        {/* Catch Route */}
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
