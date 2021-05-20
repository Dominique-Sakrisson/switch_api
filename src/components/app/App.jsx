import React from 'react';
import {
  Switch, Route, Link
} from 'react-router-dom';
import HomePage from '../../containers/HomePage/HomePage';
import Characters from '../../containers/CharactersPage/Characters'
import DetailsPage from '../../containers/DetailsPage/DetailsPage'

export default function App() {
  return(
    <div>
      <header>
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
