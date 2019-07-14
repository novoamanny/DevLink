import React, {Component, Fragment, useState} from 'react';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/alert';

import {login} from '../../actions/auth';

import PropTypes from 'prop-types';

import './Login.css';

// AUTH
// Token setup
// Load User

const Login = ({setAlert, login}) => {

    const [formData, setFormData] = useState({
        loginEmail: '',
        loginPassword: ''
    })
        

    const {loginEmail, loginPassword} = formData;


    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e =>{

        e.preventDefault();

        login(loginEmail, loginPassword)
        
        // if(registerPassword !== registerPassword2){
        //     // Redux action call
        //     setAlert('Passwords Do Not Match', 'danger');
        // }else{
        //     register({registerName,registerEmail, registerPassword});
        // }
    }

        return(
            <Fragment>
                    <form id='form-login-container' onSubmit={e => onSubmit(e)}>
                        

                        <div className='bg-img-log'></div>
                            
                            <h1>Sign In</h1>

                            <div id='details-login'>
                                <i className="fas fa-user"></i>
                                <p>Sign Into Your Account</p>
                            </div>
                            

                            <div id='input-login-container'>
                                
                                <input onChange={e => onChange(e)} name='loginEmail' value={loginEmail} placeholder='Email' type='text'/>
                            

                            
                            
                                <input onChange={e => onChange(e)} name='loginPassword' value={loginPassword} placeholder='Password' type='text'/>

                            </div>
                            

                            <div id='submit-container-log'>
                            <input  id='submit-login-btn'  type='submit' value='Submit'/>
                            </div>

                        
                    </form>
            </Fragment>
        );
    }

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
}

export default connect(null, {setAlert, login})(Login);