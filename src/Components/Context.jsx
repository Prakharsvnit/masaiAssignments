import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [isAuth, setAuth] = useState(false);
    const [token, setToken] = useState("");
    const toggleAuth = (token) => {
        if (token === "signout") {
            setAuth(false);
            setToken("");
        }
        else if (token) {
            setAuth(true)
            setToken(token);
        }
    }
    const value = { isAuth, token, toggleAuth };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };