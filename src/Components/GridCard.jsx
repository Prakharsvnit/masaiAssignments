import React from 'react'
import "../App.css"
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import MultiActionAreaCard from './Card'
const GridCard = () => {
    const { currentTheme, handleToggleTheme } = useContext(ThemeContext);

    return (
        <>
        <div className="card">
            <MultiActionAreaCard />
            <MultiActionAreaCard />
            <MultiActionAreaCard />
            <MultiActionAreaCard />
            <MultiActionAreaCard />
            <MultiActionAreaCard />
        </div>
        <button onClick={handleToggleTheme}>Switch theme to {currentTheme === "light" ? "Dark":"Light"}</button>          </>  
    )
}

export default GridCard