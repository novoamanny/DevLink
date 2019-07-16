import React, {Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/alert';

import {register} from '../../actions/auth';

import PropTypes from 'prop-types';



import './Register.css';

const Register = ({ setAlert, register, isAuthenticated }) =>{

    
        

    const [formData, setFormData] = useState({
            
            registerEmail: '',
            registerName: '',
            registerPassword: '',
            registerPassword2: ''
    });
    

    const {registerName, registerEmail, registerPassword, registerPassword2} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    
    
    
    const onSubmit = async e =>{

        e.preventDefault();

        
        
        if(registerPassword !== registerPassword2){
            // Redux action call
            setAlert('Passwords Do Not Match', 'danger');
        }else{
            register({registerName,registerEmail, registerPassword});
        }
    }
   

        if(isAuthenticated){
            return <Redirect to='/dashboarcd'/>
        }

    
        return(
            <Fragment>

                
                    
                        <form id='form-register-container' onSubmit={e => onSubmit(e)}>
                        
                            <div className='bg-img-reg'></div>
                            
                            <h1>Sign Up</h1>

                            <div id='details'>
                                <i className="fas fa-user"></i>
                                <p>Create Your Account</p>
                            </div>
                            

                            <div id='input-register-container'>
                                
                                <input onChange={e => onChange(e)} placeholder='Name' name='registerName' type='text' value={registerName}/>
                        


                            
                                
                                <input onChange={e => onChange(e)} placeholder='Email' name='registerEmail' type='text' value={registerEmail}/>
                            

                            
                            
                                <input onChange={e => onChange(e)} placeholder='Password' name='registerPassword' type='text' value={registerPassword}/>

                                <input onChange={e => onChange(e)} placeholder='Re-Type Password' name='registerPassword2' type='text' value={registerPassword2}/>

                            </div>
                            

                            <div id='submit-container'>
                                <input  id='submit-register-btn'  type='submit' value='Submit'/>
                            </div>

                        </form>
                    
            </Fragment>
        );
    
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {setAlert, register})(Register);