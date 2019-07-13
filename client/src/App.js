import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
// import { loadUser } from './actions/auth';
// import setAuthToken from './utils/setAuthToken';


import Navbar from './components/Layout/Navbar/Navbar';
import Landing from './components/Layout/Landing/Landing';
import Routes from './Routes/Routes';
import Alert from './components/Layout/Alert';

import './App.css';

function App() {
  return (

    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar/>
          <Fragment>
            <div id='alert-container'>
            <Alert/>
            </div>
          
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route component={Routes}/>
          </Switch>
          </Fragment>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
