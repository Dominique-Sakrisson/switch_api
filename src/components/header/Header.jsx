import React, {useContext, useState, useEffect} from 'react'
import {useModify, useTheme} from '../state/Themprovider'
import styles from '../../styles/style.css'

const Header = () => {
    const changeTheme = useModify();
    const theme = useTheme();    
    // const themeMap = {
    //     light: 'dark',
    //     dark: 'light'
    // };

    const handleInputChange = () => {
        changeTheme(theme === 'dark' ? 'light': 'dark');
        // changeTheme(themeMap[theme]);
    }

    return (  
    <div>
        <h1>Character Listerererer</h1>
        <label >Dark Mode?
            <input 
                aria-label='bg-change'
                type='checkbox' 
                onChange={handleInputChange}
                checked={theme === 'dark'}
            />
            <span className={styles.toggler}></span>
        </label>
    </div>
    );
}

export default Header;
