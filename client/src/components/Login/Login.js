import React, {Component, Fragment} from 'react';
import './Login.css';

class Login extends Component{

    constructor(){
        super();

        this.state ={
            
            loginEmail: '',
            loginName: '',
            loginPassword: ''
        }
    }


    onNameChange = (event) =>{
        this.setState({
            loginName: event.target.value
        })
   }

    onEmailChange = (event) =>{
        this.setState({
            loginrEmail: event.target.value
        })
   }

   onPasswordChange = (event) =>{
        this.setState({
            loginPassword: event.target.value
        })
   }


   onLoginClick = (event) =>{
        

    const {loginName, loginEmail, loginPassword} = this.state;
   
}

    render(){
        return(
            <Fragment>
                    
                        <div id='form-login-container'>
                            
                            <h1>Sign In</h1>

                            <div id='details-login'>
                                <i className="fas fa-user"></i>
                                <p>Sign In</p>
                            </div>
                            

                            <div id='input-login-container'>
                                
                                <input onChange={this.onEmailChange} placeholder='Email' type='text'/>
                            

                            
                            
                                <input onChange={this.onPasswordChange} placeholder='Password' type='text'/>

                            </div>
                            

                            <div id='submit-container'>
                                <button onClick={() => this.onLoginClick()} id='submit-login-btn'  type='submit'>Submit</button>
                            </div>

                        </div>
                    
            </Fragment>
        );
    }
}


export default Login;