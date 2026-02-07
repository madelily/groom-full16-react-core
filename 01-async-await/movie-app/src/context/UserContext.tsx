import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <UserContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
