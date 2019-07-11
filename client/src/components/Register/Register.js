import React, {Fragment, useState} from 'react';
import './Register.css';

const Register = () =>{

    
        

    const [formData, setFormData] = useState({
            
            registerEmail: '',
            registerName: '',
            registerPassword: '',
            registerPassword2: ''
    });
    


//     const onNameChange = (event) =>{
//         this.setState({
//             registerName: event.target.value
//         })
//    }

//     const onEmailChange = (event) =>{
//         this.setState({
//             registerEmail: event.target.value
//         })
//    }

//    const onPasswordChange = (event) =>{
//         this.setState({
//             registerPassword: event.target.value
//         })
//    }



   
        

    const {registerName, registerEmail, registerPassword, registerPassword2} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    
    
    
    const onSubmit = async e =>{

        e.preventDefault();

        console.log(formData);
        
        if(registerPassword !== registerPassword2){
            console.log('wrong passwords');
        }else{
            console.log('success');
        }
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


export default Register;