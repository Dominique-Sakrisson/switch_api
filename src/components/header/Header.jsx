import React, {useContext, useState, useEffect} from 'react'
import {useModify, useTheme} from '../state/Themprovider'
import styles from '../../styles/style.css'

const Header = () => {
    const changeTheme = useModify();
    const theme = useTheme();    
    
    const handleInputChange = (e) => {
        (e.target.checked ? changeTheme('dark') : changeTheme('light'));
    }

    return (  
    <div>
        <h1>Character Listerererer</h1>
        <label aria-label='bg-change'>Dark Mode?
            <input 
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
