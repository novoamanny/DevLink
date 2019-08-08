import axios from 'axios';
import {setAlert} from './alert';
import {
    GET_POSTS,
    GET_USER_POSTS,
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

// Get All Posts
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


// Get Post
export const getPost = id => async dispatch=>{
    try{
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`)
        console.log(res.data);
        dispatch({
            type: GET_POST,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: POST_ERROR,
            payload: ({msg: err.response.statusText, status: err.response.status})
        })
    }
}

// Get User Posts
export const getUserPosts = () => async dispatch =>{
    try{
        const res = await axios.get(`http://localhost:5000/api/posts/me/`);
        
        dispatch({
            type: GET_USER_POSTS,
            payload: res.data
        });
    }catch(err){
        dispatch({
            type: POST_ERROR,
            payload: ({msg: err.response.statusText, status: err.response.status})
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


// D E L E T E  P O S T  H E R E


// ADD Likes
export const addLikes = id => async dispatch =>{
    try{
       const res = await axios.put(`http://localhost:5000/api/posts/like/${id}`)

       dispatch({
           type: UPDATE_LIKES,
           payload: res.data
       });
       dispatch(setAlert('Post Liked', 'sucess'));
    }catch(err){
        dispatch({
            type: POST_ERROR,
            payload: ({msg: err.response.statusText, status: err.response.status})
        });
    }
}


// Unlike
export const unlike = id => async dispatch =>{
    try{
       const res = await axios.put(`http://localhost:5000/api/posts/unlike/${id}`)

       dispatch({
           type: UPDATE_LIKES,
           payload: res.data
       });
       dispatch(setAlert('Post Unliked', 'warning'));
    }catch(err){
        dispatch({
            type: POST_ERROR,
            payload: ({msg: err.response.statusText, status: err.response.status})
        });
    }
}


// Add Comment
export const addComment = (text, id) => async dispatch =>{

    

    try{
        const res = await axios.post(`http://localhost:5000/api/posts/comment/${id}`, text, config);
        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        });
        dispatch(setAlert('Comment Added', 'success'));
    }catch(err){
        dispatch({
            type: POST_ERROR,
            payload: ({msg: err.response.statusText, status: err.response.status})
        })
        dispatch(setAlert('Comment Post Error', 'danger'));
    }
}



// Delete Comment HERE