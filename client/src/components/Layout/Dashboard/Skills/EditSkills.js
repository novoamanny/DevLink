import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCurrentProfile, deleteSkill} from '../../../../actions/profile';
import PropTypes from 'prop-types';

import './EditSkills.css';

const EditSkills = ({getCurrentProfile, deleteSkill, auth: { user },profile: { profile, loading }}) =>{

    useEffect(() => {
        
        getCurrentProfile();
        
      },[getCurrentProfile])


    

    

   return(
    <div id='edit-skills-container'>
        <h1>Edis Skills</h1>
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

export default connect(mapStateToProps, {getCurrentProfile, deleteSkill})(EditSkills)