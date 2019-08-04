import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';


import { getCurrentProfile, addEducation, deleteEducation } from '../../../../actions/profile';




const EditEducation = ({getCurrentProfile, addEducation, deleteEducation, auth: {user}, profile: {profile}}) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])

    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        description: '',
        from: '',
        to: ''
        
    })

    const {school, degree, fieldofstudy, description, from, to} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = async e =>{
        e.preventDefault();
        
        addEducation(school, degree, fieldofstudy, description, from, to);
    }


    


    return(
        <div id='edit-education-container'>
        <h1>Edit Education</h1>
        <h1>Current Education</h1>
            <div id='current-education'>
                {profile.education.map(edu => (
                    <div key={edu._id} className='education-display' >
                        <div id='delete-skill'>
                            {/* Minor Bug found - deleteEducation will cause the page to reload and lose the data. */}
                            <span className='delete-btn' onClick={() => deleteEducation(edu._id)}>X</span>
                        </div>
                        <div>
                            <h1>{edu.school}</h1>
                            <h1>{edu.degree}</h1>
                            <p>{edu.fieldofstudy}</p>
                            <p>{edu.description}</p>
                            <p><Moment format='YYYY/MM/DD'>{moment.utc(edu.from)}</Moment></p>
                            <p><Moment format='YYYY/MM/DD'>{moment.utc(edu.to)}</Moment></p>
                        </div>
                        
                    </div>
                ))}
            </div>

            <form className='education-form-container' style={{paddingTop: '100px'}} onSubmit={(e) => onSubmit(e)}>
                    <h1>Add New Experience</h1>
                    <input  name='school'  placeholder='Add School' type='text' value={school} onChange={e => onChange(e)}/>
                    <input  name='degree'  placeholder='Add Degree' type='text' value={degree} onChange={e => onChange(e)}/>
                    <input  name='fieldofstudy'  placeholder='Add Field Of Study' value={fieldofstudy} type='text' onChange={e => onChange(e)}/>
                    <input  name='description'  placeholder='Add Description' type='text' value={description} onChange={e => onChange(e)}/>
                    <input  name='from'  placeholder='From YYYY/MM/DD' type='text' value={from} onChange={e => onChange(e)}/>
                    <input  name='to'  placeholder='To YYYY/MM/DD' type='text' value={to} onChange={e => onChange(e)}/>
                    <input type='submit' value='Submit'/>
            </form>
    </div>
    );
}

EditEducation.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile, addEducation, deleteEducation})(EditEducation);