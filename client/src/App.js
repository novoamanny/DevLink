import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
// import store from './store';
// import { loadUser } from './actions/auth';
// import setAuthToken from './utils/setAuthToken';


import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
      </Fragment>
    </Router>
  );
}

export default App;
