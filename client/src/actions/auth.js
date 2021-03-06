import axios from 'axios';
import {setAlert} from './alert';

import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE} from './types';
import setAuthToken from '../utils/setAuthToken';


const config = {
  headers: {
      'Content-Type': 'application/json'
  }
}


export const loadUser = () => async dispatch =>{
  if(localStorage.token){
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('http://localhost:5000/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
  
}



// Register User
export const register = ({registerName, registerEmail, registerPassword}) => async dispatch =>{

    const body= JSON.stringify({name: registerName, email: registerEmail, password: registerPassword});
    

    try{
        const res = await axios.post('http://localhost:5000/api/users', body, config, console.log('Registering...'));
                        
        

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    }catch(err){
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL,
        });
    }
}


// Login User
export const login = (loginEmail, loginPassword) => async dispatch => {
  
    const body = JSON.stringify({ email: loginEmail, password: loginPassword });

   
  
    try {
      const res = await axios.post('http://localhost:5000/api/auth', body, config);
        
      console.log(res.data)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
  
      dispatch(loadUser());
    } catch (err) {

      const errors = err.response.data.errors;
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
      
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };

// Logout User
export const logout = () => dispatch =>{
  dispatch({type: CLEAR_PROFILE})
  dispatch({type: LOGOUT})
  
}
