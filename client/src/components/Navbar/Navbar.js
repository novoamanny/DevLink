import React, {Component} from 'react';

import classes from './Navbar.css';






const Navbar = () =>{
    return(
        <nav>
            <div className='contents'>
                <div className="logoContainer">
                    <i className="fas fa-laptop-code logo"></i>
                    
                    
                    <h1>devLink</h1>
                </div>
            
                    
                        
                
                
                
                

                <div className='btnContainer'>
                    {/* <div className='top'></div>
                    <div className='middle'></div>
                    <div className='bottom'></div> */}

                    <span>&#9776;</span>
                </div>
            </div>



            <div className='underline'></div>
        </nav>
    );
}


export default Navbar;