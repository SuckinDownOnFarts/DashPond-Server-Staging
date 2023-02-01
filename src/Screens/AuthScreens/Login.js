import React, { useRef, useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';

const Login = () => {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const { setAuth, auth, persist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signin', 
        JSON.stringify({ user, pwd }), 
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      //Setup accessTokens
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      //Setup Roles
      setAuth({ user, accessToken, roles });
      setUser('');
      setPwd('');
      
      

      navigate(from, {replace: true});

    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unathorized')
      } else {
        setErrMsg('Login Failed')
      }
      errRef.current.focus()
    }
  }

  useEffect(() => {
    localStorage.setItem("persist", persist);
}, [persist])

  return (
    <div className="py-6 h-[calc(100vh-142px)] bg-light-gray align-middle flex">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl w-1000">
        <div className="hidden lg:block lg:w-1/2 bg-cover"></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">DashPond</h2>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
            <div className="px-4 py-3">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                </svg>
            </div>
            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
          </a>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label 
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor='username'  
              >Username</label>
              <input 
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 
                  rounded py-2 px-4 block w-full appearance-none" 
                type="text" 
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label 
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor='password'
                >Password</label>
                <a href="#" className="text-xs text-gray-500">Forgot Password?</a>
              </div>
              <input 
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 
                  rounded py-2 px-4 block w-full appearance-none" 
                  type="password" 
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
            </div>
            <div className="mt-8">
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a href={`${BASE_URL}/register`} className="text-xs text-gray-500 uppercase">or sign up</a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Login 



//   <section>
//   <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//   <h1>Sign In</h1>
//   <form onSubmit={handleSubmit}>
//     <label htmlFor="username">Username:</label>
//     <input 
//       type="text" 
//       id="username"
//       ref={userRef}
//       autoComplete="off"
//       onChange={(e) => setUser(e.target.value)}
//       value={user}
//       required
//     />
//     <label htmlFor="password">Password:</label>
//     <input 
//       type="password" 
//       id="password"
//       onChange={(e) => setPwd(e.target.value)}
//       value={pwd}
//       required
//     />
//     <button>Sign In</button>
//   </form>
//   <p>
//     Need an Account?<br />
//     <span className="line">
//       <a href="#">Sign up</a>
//     </span>
//   </p>
// </section>
// )
// 