import { createContext, useState } from 'react';
import { UserStorage } from '../utils/UserStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    const [currentUser, setCurrentUser] = useState(UserStorage.getUser() || {})

    const login = (token, user) => {
        localStorage.setItem("token", token);
        UserStorage.saveUser(user);

        setIsAuthenticated(true);
        setCurrentUser(user);
    };

    const logout = () => {
        localStorage.removeItem("token");
        UserStorage.clearUser();
        setIsAuthenticated(false);
        setCurrentUser({});
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated,currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

};