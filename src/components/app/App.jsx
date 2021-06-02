import React from 'react';
import {
  Switch, Route, Link
} from 'react-router-dom';
import HomePage from '../../containers/HomePage/HomePage';
import Characters from '../../containers/CharactersPage/Characters'
import DetailsPage from '../../containers/DetailsPage/DetailsPage'
import styles from '../../styles/style.css'
import {useTheme} from '../state/Themprovider'
import Header from '../header/Header'

export default function App() {
  const theme = useTheme();
  return(
    <div className={theme === 'dark' ? styles.darkMode : styles.default}>
      <header>
        <Header ></Header>
        <>
          <Link to=''></Link>
          <Switch>
            <Route path='/' 
            exact
            render={(routerProps) => <HomePage{...routerProps}/>} 
            />
            <Route path='/:api' 
            exact
            render={(routerProps) => <Characters{...routerProps}/>} 
            />
            <Route path='/:api/:id' 
            exact
            render={(routerProps) => <DetailsPage{...routerProps}/>} 
            />
          </Switch>
        </>
      </header>
    </div>
  )
}
