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

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Switch>
          <Route path='/' component={Landing}/>
          <Route path='/register' component={Register}/>
        </Switch>
        
      </Fragment>
    </Router>
  );
}

export default App;
