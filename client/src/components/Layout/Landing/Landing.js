import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Landing.css';
import { setTimeout } from 'timers';
import { types } from 'util';

const Landing = ({isAuthenticated}) =>{


    const [formData, setFormData] = useState({
        tokenText: ''
        
    })

    const {tokenText} = formData;

    // Redirect
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    const colorStyles = [
        {
            color: '#4287f5'
        },
        {
            color: 'lightBlue'
        },
        {
            color: 'white'
        },
        {
            color: 'yellow'
        },
        {
            color: '#27db2a'
        },
        {
            color: '#27db2a'
        },
        {
            color: '#27db2a'
        },
        {
            color: 'yellow'
        },
        {
            color: 'white'
        }

    ]


    

    const words = ['TEAMWORK', 'SUCCESS', 'CONNECT']

    const text = ['const', ' devTeam', ' =', ' devLink(', `'`, 'TEAMWORK', `'`, ')', ';' ];

    const wait = 3000;

    let i = 0;

    let isDeleting = false;

    

    


    // const type = (words, wait, i, isDeleting, tokenText) =>{
        
    //     if(i === 3){
    //         i = 0;
    //     }
        
    //     let word = words[i];
        
    //     let typeSpeed = 300;

        
        

        
        
        
        


    //     if (isDeleting){
    //         tokenText = word.substring(0, tokenText.length - 1);
    //         console.log(tokenText);
            
    //     } else{
    //         tokenText = word.substring(0, tokenText.length + 1);
    //         console.log(tokenText);
            
    //     }

        

    //     if(isDeleting) {
    //         typeSpeed /= 2;
            
    //     }
      
    //     // If word is complete
    //     if(!isDeleting && tokenText === word) {

    //         // Make pause at end
    //         typeSpeed = wait;
    //         // Set delete to true
    //         isDeleting = true;

    //     } else if(isDeleting && tokenText === '') {
    //         isDeleting = false;
    //         // Move to next word
    //         i += 1;
    //         // Pause before start typing
    //         typeSpeed = 500;
    //     }

    //     setTimeout(() => {
    //         setFormData({...formData});
    //         type(words, wait, i, isDeleting, tokenText);
    //     }, typeSpeed);
        
    // }



    const devLink = text.map((item, index) =>(
        
        // if(index === 5){
            
        //     return <span key={index} id='text-type' style={colorStyles[index]}>{type(words, wait, i, isDeleting, tokenText)}</span>
        // } else{
        //     return <span key={index} style={colorStyles[index]}>{item}</span>
            
        // }

        <span key={index} style={colorStyles[index]}>{item}</span>

    ))


    return(
        <div className='showcase'>
            <div className='bg-img'></div>

            <div className='headerText'>
                <h1>devLink</h1>
                <p style={{padding: '4px', background: '#2f2f2f', borderRadius: '15px'}}>{devLink}</p>
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







    // // Current index of word
    // const current = this.wordIndex % this.words.length;
    // // Get full text of current word
    // const fullTxt = this.words[current];

    // // Check if deleting
    // if(this.isDeleting) {
    //   // Remove char
    //   this.txt = fullTxt.substring(0, this.txt.length - 1);
    // } else {
    //   // Add char
    //   this.txt = fullTxt.substring(0, this.txt.length + 1);
    // }

    // // Insert txt into element
    // this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // // Initial Type Speed
    // let typeSpeed = 300;

    // if(this.isDeleting) {
    //   typeSpeed /= 2;
    // }

    // // If word is complete
    // if(!this.isDeleting && this.txt === fullTxt) {
    //   // Make pause at end
    //   typeSpeed = this.wait;
    //   // Set delete to true
    //   this.isDeleting = true;
    // } else if(this.isDeleting && this.txt === '') {
    //   this.isDeleting = false;
    //   // Move to next word
    //   this.wordIndex++;
    //   // Pause before start typing
    //   typeSpeed = 500;
    // }

    // setTimeout(() => this.type(), typeSpeed);
  