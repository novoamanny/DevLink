import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getCurrentProfile, addSkill, deleteSkill} from '../../../../actions/profile';
import PropTypes from 'prop-types';

import './EditSkills.css';

const EditSkills = ({getCurrentProfile, addSkill, deleteSkill, auth: { user },profile: { profile, loading }}) =>{

    useEffect(() => {
        
        getCurrentProfile();
        
      },[getCurrentProfile])


    const [formData, setFormData] = useState({
        newSkill: ''
    })

    const {newSkill} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = async e =>{
        e.preventDefault();
        
        addSkill(newSkill);
    }

   return(
    <div id='edit-skills-container'>
        <h1>Edit Skills</h1>
        <h1>Current Skills</h1>
            <div id='current-skills'>
                {profile.skills.map(skill => (
                    <div key={skill} className='skill-display' onClick={() => deleteSkill(skill)}>
                        <div id='delete-skill'>
                            <span className='delete-btn'>X</span>
                        </div>
                        <h2 >{skill}</h2>
                    </div>
                ))}
            </div>

            <form className='skill-form-container' onSubmit={(e) => onSubmit(e)}>
                    <h1>Add Skill</h1>
                    <input onChange={e => onChange(e)} name='newSkill' value={newSkill} placeholder='Add Skill' type='text'/>
                    <input type='submit' value='Submit'/>
            </form>
    </div>

   )
}

EditSkills.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, {getCurrentProfile, addSkill, deleteSkill})(EditSkills)