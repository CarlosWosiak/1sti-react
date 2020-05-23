import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import LateralNavbar from './components/lateral-navbar';
import Routes from './routes';

function App() {
  return (
    <Router>
      <LateralNavbar />
      <Routes />
    </Router>
  );
}

export default App;
