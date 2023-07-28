import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
  });

export const axiosPrivate = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});


