import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';



const Routes = () => {
    return (
      <section className='container'>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    );
  };
  
  export default Routes;