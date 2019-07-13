import React from 'react';
import {Link} from 'react-router-dom';
import './Landing.css';

const Showcase = () =>{

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


export default Showcase;