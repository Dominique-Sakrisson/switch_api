import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('default');

    const modify = (theme) => setTheme(theme);

    const state = {theme, modify};

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
