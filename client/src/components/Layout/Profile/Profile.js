import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment'
import {getCurrentProfile} from '../../../actions/profile';


import PostsProfile from './PostsProfile/PostsProfile'
import Spinner from '../Spinner/Spinner';

import './Profile.css';


const Profile = ({getCurrentProfile, auth:{user}, profile:{profile, loading}}) =>{
    useEffect(() =>{
        getCurrentProfile();
    }, [getCurrentProfile])

    return loading && profile === null ? <Spinner/> :
        
        <div className='profile-UI'>

            <div className='profile-info'>
                <div className='user-info'>
                    <div style={{display: 'flex', flexWrap:'wrap', justifyContent: 'center'}}>
                        <div className='profile-img'>
                        {/* image */}
                        </div>
                    </div>
                    <div className='user-details'>
                        <h1>{user.name}</h1>
                        <div className='detail-block'>
                            <p>{`Email: ${user.email}`}</p>
                            <p>{`Status: ${profile.status}`}</p>
                        </div>
                        

                    </div>

                </div>
                <div className='user-skills'>


                    {profile.skills === undefined || profile.skills.length === 0 
                        ? <p>No Skills</p> 
                        : profile.skills.map(skill =>(
                            <p key={skill}>{skill}</p>
                        ))}
                    
                    
                </div>
            </div>

            <div className='profile-edu-exp'>
                <div className='profile-exp'>
                    <h1>Experience</h1>
                    <div className='exp'>
                            {profile.experience === undefined || profile.experience.length === 0 
                                ? <p>NO EXPERIENCE</p>
                                : profile.experience.map(exp => (
                                    <div key={exp._id} className='exp-container-profile'>
                                        <h2>{exp.title}</h2>
                                        <p>{exp.company}</p>
                                        <p>{exp.description}</p>
                                        <p><Moment format='MM/DD/YYYY'>{moment.utc(exp.from)}</Moment></p>
                
                                    </div>
                                ))
                            }
                    </div>
                </div>
                <div className='profile-edu'>
                    <h1>Education</h1>
                    <div className='edu'>
                            {profile.education === undefined || profile.education.length === 0 
                                ? <p>NO EDUCATION</p>
                                : profile.education.map(edu => (
                                    <div key={edu._id} className='edu-container-profile'>
                                        <h2>{edu.school}</h2>
                                        <p>{edu.degree}</p>
                                        <p><Moment format='MM/DD/YYYY'>{moment.utc(edu.from)}</Moment></p>
                                        {edu.to === null || ''
                                            ? <p>Current</p>
                                            : <p><Moment format='MM/DD/YYYY'>{moment.utc(edu.to)}</Moment></p>
                                        }
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
            
            <PostsProfile/>
        </div>
        

    
}

Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    
   
}


const mapStateToProps = state =>({
    auth: state.auth,
    profile: state.profile,
    
    
})

export default connect(mapStateToProps, {getCurrentProfile})(Profile);