import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import DashBoard from '../components/Layout/Dashboard/Dashboard';
import editSkills from '../components/Layout/Dashboard/Skills/EditSkills';
import PrivateRoute from './PrivateRoute';

// Need to add Dashboard route PRIVATE

const Routes = () => {
    return (
      <section className='container'>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/dashboard' component={DashBoard}/>
          <PrivateRoute exact path='/edit/skills' component={editSkills} />
        </Switch>
      </section>
    );
  };
  
  export default Routes;