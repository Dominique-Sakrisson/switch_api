import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from '../../containers/HomePage/HomePage';
import Characters from '../../containers/CharactersPage/Characters'
import DetailsPage from '../../containers/DetailsPage/DetailsPage'

export default function App() {
  return(
    <div>
      <header>
        <Router>
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
        </Router>
      </header>
    </div>
  )
}
