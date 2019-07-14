import axios from 'axios';
import {setAlert} from './alert';

import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL} from './types';



// Register User
export const register = ({registerName, registerEmail, registerPassword}) => async dispatch =>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body= JSON.stringify({name: registerName, email: registerEmail, password: registerPassword});
    

    try{
        const res = await axios.post('http://localhost:8080/api/users', body, config, console.log('Registering...'));
                        
        

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
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const body = JSON.stringify({ email: loginEmail, password: loginPassword });

    console.log(body);
  
    try {
      const res = await axios.post('http://localhost:8080/api/auth', body, config);
        
      
  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
  
    //   dispatch(loadUser());
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
