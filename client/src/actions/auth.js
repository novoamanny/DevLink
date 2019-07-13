import axios from 'axios';
import {setAlert} from './alert';

import {REGISTER_SUCCESS, REGISTER_FAIL} from './types';


export const register = ({registerName, registerEmail, registerPassword}) => async dispatch =>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body= JSON.stringify({name: registerName, email: registerEmail, password: registerPassword});
    

    try{
        const res = await axios.post('http://localhost:8080/api/users', body, config, console.log('in'));
                        
        console.log(res.data);

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
