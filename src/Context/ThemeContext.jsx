import { createContext, useState } from "react";

const ThemeContext = createContext();
const themeData = {
    light: {
        textColor: "black",
        backgroundColor: "red",
        componentColor:"green",
        headingColor:"yellow",
    },
    dark: {
        headingColor: "blue",
        componentColor: "black",
        textColor: "orange",
        backgroundColor:"brown"
    }
}
const ThemeContextProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState("light");
    const handleToggleTheme = () => {
        setCurrentTheme(currentTheme === "light"?"dark":"light")
    }
    const value = {currentTheme, handleToggleTheme, theme:themeData[currentTheme]}
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export {ThemeContext, ThemeContextProvider}