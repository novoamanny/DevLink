import axios from 'axios';

import {setAlert} from './alert';

import {
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    ACCOUNT_DELETED,
    GET_REPOS
} from './types';
import profile from '../reducers/profile';

const config = {
  headers: {
      'Content-Type': 'application/json'
  }
}

// Get current users profile
export const getCurrentProfile = () => async dispatch =>{
    try{
        const res = await axios.get('http://localhost:5000/api/profile/me');

        

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}


// Add Skill
export const addSkill = (newSkill) => async dispatch =>{

 

  const body = JSON.stringify({skills: newSkill})

  try{
    const res = await axios.put('http://localhost:5000/api/profile/skills', body, config);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Skill Added', 'success'));
  }catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// Delete Skill
export const deleteSkill = id => async dispatch => {
    
    try {
      const res = await axios.delete(`http://localhost:5000/api/profile/skills/${id}`);
        
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
  
      dispatch(setAlert('Skill Removed', 'warning'));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  // Add Experience 
export const addExperience = (title, company, description, from, to) => async dispatch =>{
   const body = JSON.stringify({title: title, company: company, description: description, from: from , to: to});

   try{
     const res = await axios.put('http://localhost:5000/api/profile/experience', body, config);
    
     dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Experience Added', 'success'));
   }catch(err){
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
   }
}


// Delete Experience
export const deleteExperience = id => async dispatch =>{
  
  try{
    const res = await axios.delete(`http://localhost:5000/api/profile/experience/${id}`)
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Experience Removed', 'warning'));
  }catch(err){
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


// Add Education
export const addEducation = (school, degree, fieldofstudy, description, from, to) => async dispatch =>{

  const body = JSON.stringify({school: school, degree: degree, fieldofstudy: fieldofstudy, description: description, from: from, to: to});

  try{
    const res = await axios.put('http://localhost:5000/api/profile/education', body, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Education Added', 'success'));
  }catch(err){
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    });
  }
}


// Delete Education
export const deleteEducation = id => async dispatch =>{
  try{
    
    const res = axios.delete(`http://localhost:5000/api/profile/education/${id}`)
    
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Education Removed', 'warning'));
  } catch(err){
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    });
  }
}