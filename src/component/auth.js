import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext(null)

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    const login = (usr) => {
        setUser(usr)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};