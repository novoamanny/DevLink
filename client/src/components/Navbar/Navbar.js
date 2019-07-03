import React, {Component} from 'react';

// Colors
const colors = {
    primary: '#49a34c',
    secondary: '#17a2b8',
    lightBlue: '#61dafb',
    dark: '#343a40',
    light: '#f4f4f4',
    danger: '#dc3545',
    success: '#28a745',
}

// Style Sheet
let styles = {
    nav:{
        backgroundColor: colors.primary,
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 1
    },
    links:{

    },
    logo:{
        
    }
    
}


const Navbar = () =>{
    return(
        <nav style={styles.nav}>
            <i className="fas fa-laptop-code"></i>
            
        </nav>
    );
}


export default Navbar;