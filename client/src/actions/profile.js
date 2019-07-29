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


// Delete Skill
export const deleteSkill = id => async dispatch => {
    
    try {
      const res = await axios.delete(`http://localhost:5000/api/profile/skills/${id}`);
        console.log(res)
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
  
      dispatch(setAlert('Skill Removed', 'success'));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };