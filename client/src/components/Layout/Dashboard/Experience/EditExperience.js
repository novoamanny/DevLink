import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Experience from './Experience';
import { getCurrentProfile } from '../../../../actions/profile';



const EditExperience = ({getCurrentProfile, auth: {user}, profile: {profile}}) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])

    // const [formData, setFormData] = useState({
    //     newSkill: ''
    // })

    // const {newSkill} = formData;

    // const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    // const onSubmit = async e =>{
    //     e.preventDefault();
        
    //     addSkill(newSkill);
    // }


    return(
        <div id='edit-experience-container'>
        <h1>Edit Skills</h1>
        <h1>Current Skills</h1>
            <div id='current-experience'>
                {profile.experience.map(exp => (
                    <div key={exp._id} className='experience-display' >
                        <div id='delete-skill'>
                            <span className='delete-btn'>X</span>
                        </div>
                        <div>
                            <h1>{exp.title}</h1>
                            <h1>{exp.company}</h1>
                            <h1>{exp.desc}</h1>
                            <h1>{exp.from}</h1>
                            <h1>{exp.to}</h1>
                        </div>
                        
                    </div>
                ))}
            </div>

            <form className='skill-form-container' >
                    <h1>Add Skill</h1>
                    <input  name=''  placeholder='Add ' type='text'/>
                    <input type='submit' value='Submit'/>
            </form>
    </div>
    );
}

EditExperience.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile})(EditExperience);