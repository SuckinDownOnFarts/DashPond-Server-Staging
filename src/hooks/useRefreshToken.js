import axios from './../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            // console.log(response.data.user);
            return { 
                ...prev, 
                roles: response.data.roles,
                accessToken: response.data.accessToken,
                email: response.data.userEmail,
                id: response.data.id
            }
        });
        // console.log(response.data.accessToken);
        return response.data.accessToken;
    };

    return refresh
}

export default useRefreshToken