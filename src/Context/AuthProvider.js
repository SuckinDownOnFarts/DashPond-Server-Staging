import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    // const persist = true;
    const [persist, setPersist] = useState(true);

    return (
        <AuthContext.Provider value={{ auth, setAuth, persist }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;