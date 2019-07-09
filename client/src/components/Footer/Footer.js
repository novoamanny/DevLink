import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () =>{
    return(
        <footer>
           <Link to='/login'>Sign In</Link>
           <Link to='/register'>Register</Link>

        </footer>
    );
}



export default Footer;