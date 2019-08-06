import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {setAlert} from '../../../actions/alert';
import {getCurrentProfile} from '../../../actions/profile';
import {addPost} from '../../../actions/post';


import Spinner from '../Spinner/Spinner';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Posts from './Posts/Posts';
import './Dashboard.css';


const Dashboard = ({setAlert, getCurrentProfile, addPost, auth: { user },profile: { profile, loading }}) =>{


    // Profile page needs work -- sepate getPosts into Profile/Post.js
    // Finish retrieveing information for Profile

    // Delete Account Feature should be added

    
    
    useEffect(() => {
        
      getCurrentProfile();
      
      
    },[getCurrentProfile])

    

    const [text, setText] = useState('');

    const onSubmit = async e =>{
        e.preventDefault();
        addPost({text});
        setText('');
    }

    return loading && profile === null ? <Spinner/> : (

        <div id='main-dashboard-container'>

            <div id='title-container'>
                <h1 id='dashboard-title'>Dashboard</h1>
            </div>

            <div id='ui-container'>

                {/* left */}
                <div id='block-container-left'>
                    <div id='name-block'>
                        <div id='image-dashboard'>
                            {/* Image */}
                        </div>
                        <div id='user-details'>
                            <h1>Hello, {user && user.name}</h1>
                            <p>status: {profile && profile.status}</p>
                            <Link to={console.log(user._id)}>View Profile</Link>
                        </div>
                    </div>


                    <div id='info-block'>

                        <div id='skills'>
                            
                            <h1 id='skills-title'>Skills</h1>
                            { profile.skills ? <Skills skills={profile.skills}/> : <h1 id='noSkills-alert'>No Skills...</h1>}
                            
                            
                        </div>
                        
                        {/* Experience */}

                        <div id='experience'>
                            <h1 id='experience-title'>Experience</h1>
                            { profile.experience ? <Experience experience={profile.experience}/> : <h1 id='noExperience-alert'>No Experience...</h1>}
                            
                        </div>

                        <div id='education'>
                            <h1 id='education-title'>Education</h1>
                            { profile.education ? <Education education={profile.education}/> : <h1 id='noEducation-alert'>No Education...</h1>}
                            
                        </div>

                    </div>
                </div>

                {/* right */}
                <div id='block-container-right'>
                    <form id='blog-container' onSubmit={(e) => onSubmit(e)}>
                        <textarea name='text' type='text' cols='30' rows='5' placeholder='Create A Post' value={text} onChange={e => setText(e.target.value)} required/>
                        <input type='submit' value='Submit'/>
                    </form>

                    <div id='feed-container'>
                        <Posts/>
                    </div>

                </div>

            </div>
        </div>
    )

}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    
    addPost: PropTypes.func.isRequired,
    // deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    
}


const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    
});


export default connect(mapStateToProps, {setAlert, getCurrentProfile, addPost})(Dashboard);