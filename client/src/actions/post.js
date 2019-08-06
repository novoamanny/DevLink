import axios from 'axios';
import {setAlert} from './alert';
import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
  } from './types';

const config = {
    header:{
        'Content-Type': 'application/json'
    }
}

// Get Posts
export const getPosts = () => async dispatch =>{
    try{
        const res = await axios.get('http://localhost:5000/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    }catch(err){
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}


// Add Post
export const addPost = (formData) => async dispatch =>{
    try{
        const res = await axios.post('http://localhost:5000/api/posts', formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        });

        dispatch(setAlert('Post Created', 'success'));
    }catch(err){
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}