import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import App from './components/app/App';
import ThemeProvider from './components/state/Themprovider'

render(
  <Router>
    <ThemeProvider>
      <App />

    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
