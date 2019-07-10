import React, {Component, Fragment} from 'react';
import './Register.css';

class Register extends Component{

    constructor(){
        super();

        this.state ={
            
            registerEmail: '',
            registerName: '',
            registerPassword: ''
        }
    }


    onNameChange = (event) =>{
        this.setState({
            registerName: event.target.value
        })
   }

    onEmailChange = (event) =>{
        this.setState({
            registerEmail: event.target.value
        })
   }

   onPasswordChange = (event) =>{
        this.setState({
            registerPassword: event.target.value
        })
   }


   onRegisterClick = (event) =>{
        

    const {registerName, registerEmail, registerPassword} = this.state;
   
}

    render(){
        return(
            <Fragment>
                    
                        <div id='form-register-container'>
                            
                            <h1>Sign Up</h1>

                            <div id='details'>
                                <i className="fas fa-user"></i>
                                <p>Create Your Account</p>
                            </div>
                            

                            <div id='input-register-container'>
                                
                                <input onChange={this.onNameChange} placeholder='Name' type='text'/>
                        


                            
                                
                                <input onChange={this.onEmailChange} placeholder='Email' type='text'/>
                            

                            
                            
                                <input onChange={this.onPasswordChange} placeholder='Password' type='text'/>

                            </div>
                            

                            <div id='submit-container'>
                                <button onClick={() => this.onRegisterClick()} id='submit-register-btn'  type='submit'>Submit</button>
                            </div>

                        </div>
                    
            </Fragment>
        );
    }
}


export default Register;