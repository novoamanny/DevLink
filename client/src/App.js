import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
// import store from './store';
// import { loadUser } from './actions/auth';
// import setAuthToken from './utils/setAuthToken';


import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';
import Routes from './Routes/Routes';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route component={Routes}/>
        </Switch>
        
      </Fragment>
    </Router>
  );
}

export default App;
