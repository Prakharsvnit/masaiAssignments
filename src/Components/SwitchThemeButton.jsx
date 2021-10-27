import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

const ThemeButton = () => {
    const { currentTheme, handleToggleTheme } = useContext(ThemeContext);
    console.log(currentTheme)
    return (
        <div>

            <button onClick={handleToggleTheme}>Switch theme to {currentTheme === "light" ? "Dark":"Light"}</button>
        </div>
    )
}

export {ThemeButton}