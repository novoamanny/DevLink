import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

import Experience from './Experience';
import { getCurrentProfile, addExperience, deleteExperience } from '../../../../actions/profile';




const EditExperience = ({getCurrentProfile, addExperience, deleteExperience, auth: {user}, profile: {profile}}) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])

    const [formData, setFormData] = useState({
        title: '',
        company: '',
        description: '',
        from: '',
        to: ''
    })

    const {title, company, description, from, to} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = async e =>{
        e.preventDefault();
        
        addExperience(title, company, description, from, to);
    }


    return(
        <div id='edit-experience-container'>
        <h1>Edit Skills</h1>
        <h1>Current Skills</h1>
            <div id='current-experience'>
                {profile.experience.map(exp => (
                    <div key={exp._id} className='experience-display' >
                        <div id='delete-skill'>
                            <span className='delete-btn' onClick={() => deleteExperience(exp._id)}>X</span>
                        </div>
                        <div>
                            <h1>{exp.title}</h1>
                            <h1>{exp.company}</h1>
                            <p>{exp.description}</p>
                            <p><Moment format='YYYY/MM/DD'>{moment.utc(exp.from)}</Moment></p>
                            <p><Moment format='YYYY/MM/DD'>{moment.utc(exp.to)}</Moment></p>
                        </div>
                        
                    </div>
                ))}
            </div>

            <form className='skill-form-container' onSubmit={(e) => onSubmit(e)}>
                    <h1>Add New Experience</h1>
                    <input  name='title'  placeholder='Add Job Title' type='text' value={title} onChange={e => onChange(e)}/>
                    <input  name='company'  placeholder='Add Company' type='text' value={company} onChange={e => onChange(e)}/>
                    <input  name='description'  placeholder='Add Description' type='text' value={description} onChange={e => onChange(e)}/>
                    <input  name='from'  placeholder='From YYYY/MM/DD' type='text' value={from} onChange={e => onChange(e)}/>
                    <input  name='to'  placeholder='To YYYY/MM/DD' type='text' value={to} onChange={e => onChange(e)}/>
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

export default connect(mapStateToProps, {getCurrentProfile, addExperience, deleteExperience})(EditExperience);