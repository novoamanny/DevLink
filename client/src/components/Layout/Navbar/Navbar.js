import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {logout} from '../../../actions/auth';

import './Navbar.css';
import auth from '../../../reducers/auth';






const Navbar = ({logout, auth: {isAuthenticated, loading}}) =>{


    const authLinks = (
        <Fragment>
            <li className='side-nav-link' onClick={()=>logout()}>Sign out</li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <Link className='side-nav-link' to='/login' onClick={()=>closeMenu()} >Sign In</Link>
            <Link className='side-nav-link' to='/register' onClick={()=>closeMenu()} >Register</Link>
        </Fragment>
    );


    const openSideMenu = () =>{
        document.getElementById('side-menu').style.width = '325px';
        
    }
    
    const closeMenu = () =>{
        document.getElementById('side-menu').style.width = '0';
        
    }


    
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
        
                            <span onClick={() => openSideMenu()}>&#9776;</span>
                        </div>
                    </div>
        
        
        
                    <div className='underline'></div>
                </nav>

                {/* Side Menu */}
                <div id="side-menu" className="side-nav">
                    <div className='decor-bar'></div>
                    <button className="btn-close" onClick={()=>closeMenu()}>&times;</button>
                    
                    {!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
                    
    
                </div>
            </Fragment>
        );
    
    
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth:   PropTypes.object.isRequired
}



const mapStatetoProps = state =>({
    auth: state.auth
})




export default connect(mapStatetoProps, {logout})(Navbar);