import { useState, useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}/

const Register = () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const { register, setError, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await api.post('/register', (data));
            console.log(response?.data);
            const accessToken = response?.data?.accessToken;
            const id = response?.data?.id;
            const roles = response?.data?.roles;
            const email = response?.data?.email;


            setAuth({ accessToken, id, roles, email });
            const path = generatePath('/profile/:id/info', {
                id: id
            });
            console.log(path);
            navigate(path);

        } catch (err) {
            if (err?.response?.status === 409) {
                setError('root.serverError', { 
                    type: err.response.status,
                })
            } 
            // else if (err?.response?.status === 400) {
            //     setError('root.serverError', { 
            //         type: err.response.status,
            //     })
            // } 
        }
    }

  return (
    <div className="bg-light-gray flex justify-center items-center flex-grow flex-col">
        <div className="bg-white rounded-lg shadow-lg w-1/4">
            <div className="w-full p-8 ">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">DashPond</h2>
                <p className="text-xl text-gray-600 text-center">Welcome!</p>
                <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                    <div className="px-4 py-3">
                        <svg className="h-6 w-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                        </svg>
                    </div>
                    <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign up with Google</h1>
                </a>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                    <a href="#" className="text-xs text-center text-gray-500 uppercase">or register with email</a>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                </div> 

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/**************************************************    EMAIL    ******************************************************************* */}
                    <div className="mt-4">
                        {errors?.email ? (
                            <>
                            {errors?.email?.type === "required" && (
                                <p style={{color: "red" }}>
                                {errors.email.message}
                                </p>
                            )}
                            {errors?.email?.type === "pattern" && (
                                <p style={{ color: "ORANGE" }}>
                                {errors.email.message}
                                </p>
                            )}
                            </>
                        ) : null}
                        {errors?.root?.serverError?.type === 409 && <p style={{color: "red" }}>Email already in use</p>}
                        <input 
                            className={
                                errors?.email?.type === 'required' || errors?.root?.serverError?.type === 409 ? 
                                    "bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-red-500 rounded py-2 px-4 block w-full appearance-none" 
                                : errors?.email?.type === 'pattern' ?
                                    "bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-orange-300 rounded py-2 px-4 block w-full appearance-none"
                                :
                                    'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'} 
                            type="email" 
                            {...register('email', { 
                                required: 'Email address is required', 
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message: 'Invalid email address'
                                }
                            })}
                            placeholder='Email Address'
                        />
                    </div>


                    
                    {/**************************************************      PASSWORD      ********************************************************************/} 
                    <div className="mt-4">
                        {errors.password ? (
                            <>
                            {errors.password.type === "required" && (
                                <p style={{color: "red" }}>
                                {errors.password.message}
                                </p>
                            )}
                            {errors.password.type === "pattern" && (
                                <p style={{ color: "ORANGE" }}>
                                {errors.password.message}
                                </p>
                            )}
                            {errors.password.type === "maxLength" && (
                                <p style={{ color: "ORANGE" }}>
                                {errors.password.message}
                                </p>
                            )}
                            {errors.password.type === "minLength" && (
                                <p style={{ color: "ORANGE" }}>
                                {errors.password.message}
                                </p>
                            )}
                            </>
                        ) : null}
                        <input 
                            className={
                                errors?.password?.type === 'required' ? 
                                    "bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-red-500 rounded py-2 px-4 block w-full appearance-none" 
                                : errors?.password?.type === 'pattern' ||  errors?.password?.type === 'minLength' || errors?.password?.type === 'maxLength' ?
                                'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-orange-300 rounded py-2 px-4 block w-full appearance-none'
                                : 'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'} 
                            type="password"
                            {...register('password', { 
                                required: 'Password is required', 
                                pattern: {
                                    value: PWD_REGEX,
                                    message: 'Password must contain A-Z, a special character and a number.'
                                }, 
                                minLength: {
                                    value: 8,
                                    message: "Password must be longer than 8 characters."
                                },
                                maxLength: {
                                    value: 24,
                                    message: "Password must be shorter than 24 characters."
                                } 
                            })} 
                            placeholder='Password'
                        />

                    </div>



                    {/* 
                        *************************************************CONFIRM PASSWORD******************************************************************* 
                    */}

                    {/* <div className="mt-4">
                            <input
                                type="password"
                                id="confirmPassword"
                                {...register('confirmPassword', { required: true, pattern: PWD_REGEX})}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 
                                rounded py-2 px-4 block w-full appearance-none" 
                                onChange={(e) => setMatchPwd(e.target.value)}
                                value={matchPwd}
                            />
                    </div> */}

                    <div className="mt-8">
                        <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Sign Up</button>
                    </div>

                </form>

                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <a href={`${BASE_URL}/login`} className="text-xs text-gray-500 uppercase">or login</a>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
                   
            </div>
        </div>
    </div>

  )
}

export default Register


