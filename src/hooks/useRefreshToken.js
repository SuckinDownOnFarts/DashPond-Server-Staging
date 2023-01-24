import axios from './../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(response.data.user);
            return { 
                ...prev, 
                roles: response.data.roles,
                accessToken: response.data.accessToken,
                user: response.data.user
            }
        });
        return response.data.accessToken;
    };

    return refresh
}

export default useRefreshToken