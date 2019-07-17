import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Landing.css';

const Landing = ({isAuthenticated}) =>{

    // Redirect
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }


    return(
        <div className='showcase'>
            <div className='bg-img'></div>

            <div className='headerText'>
                <h1>devLink</h1>
                <p>Create a developer profile/portfolio, share posts and get help from other developers</p>
            </div>

            <div className='btn-container'>
                <Link to='/register' className='BTN1'>Register</Link>
                <Link to='/login' className='BTN2'>Sign In</Link>
            </div>
            

        </div>
    );
}


Landing.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps)(Landing);