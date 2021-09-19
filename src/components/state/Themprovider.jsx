import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const modify = (theme) => {
        localStorage.setItem("theme", theme)
        setTheme(theme)
    };

    const state = {theme, modify};

    useEffect(() => {
        const theme = String(localStorage.getItem("theme"))
        setTheme(theme);
    }, [])

    return(
        <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    );
};

export const useModify = () => {
    const {modify} = useContext(ThemeContext);
    return modify;
}

export const useTheme = () => {
    const {theme} = useContext(ThemeContext);
    return theme;
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ThemeProvider;
