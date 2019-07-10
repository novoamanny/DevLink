import React, {Component,Fragment} from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';






class Navbar extends Component{


    openSideMenu = () =>{
        document.getElementById('side-menu').style.width = '325px';
        
    }
    
    closeMenu = () =>{
        document.getElementById('side-menu').style.width = '0';
        
    }

    render(){
        return(
            <Fragment>
                <nav>
                    <div className='contents'>
                        <div className="logoContainer">
                            <Link to='/'>
                                <i className="fas fa-laptop-code logo"></i>
                            </Link>
                           
                            <Link to='/'>
                                <h1>devLink</h1>
                            </Link>
                            
                            
                            
                        </div>
                    
                            
                                
                        
                        
                        
                        
        
                        <div className='btnContainer'>
                            {/* <div className='top'></div>
                            <div className='middle'></div>
                            <div className='bottom'></div> */}
        
                            <span onClick={() => this.openSideMenu()}>&#9776;</span>
                        </div>
                    </div>
        
        
        
                    <div className='underline'></div>
                </nav>

                {/* Side Menu */}
                <div id="side-menu" className="side-nav">
                    <div className='decor-bar'></div>
                    <button className="btn-close" onClick={()=>this.closeMenu()}>&times;</button>
                    
                    <Link className='side-nav-link' to='/login' onClick={()=>this.closeMenu()} >Sign In</Link>
                    <Link className='side-nav-link' to='/register' onClick={()=>this.closeMenu()} >Register</Link>
                    
    
                </div>
            </Fragment>
        );
    }
    
}


export default Navbar;