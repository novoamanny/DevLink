import React, {useEffect, useState}from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

import {getPosts, addLikes, unlike, addComment} from '../../../../actions/post';
import Comments from './Comments/Comments';
import Spinner from '../../Spinner/Spinner';

import './Posts.css'


const Posts = ({getPosts, addLikes, unlike, addComment, auth:{user}, post: {posts, loading}}) =>{
    useEffect(() =>{
        getPosts();
    },[getPosts])


    


    const slideHandle = (sliderID) =>{
        
        document.getElementById(sliderID).classList.contains('active') 
            ? document.getElementById(sliderID).classList.remove('active') 
            : document.getElementById(sliderID).classList.add('active');
        
        
        
    }

    return loading && posts === null ? <Spinner/> : <div id='feed-container'>{posts.map(post =>{
        return(
            <div key={post._id} id='dash-post-container'>
                <h2>{post.text}</h2>
                <div id='post-info'>
                    <p>{post.name}</p>
                    <p><Moment format='YYYY/MM/DD'>{moment.utc(post.date)}</Moment></p>
                </div>
                <div id='post-btns'>
                    <p onClick={() => addLikes(post._id)}>Like</p>
                    <p onClick={() => unlike(post._id)}>Unlike</p>
                    
                    <p id='hover-btn' onClick={() => slideHandle(`comments-slider-${post._id}`)}>Comments</p>
                    
                </div>

                <div id={`comments-slider-${post._id}`} className='comments-slider'>
                    
                    <Comments id='comments-tag' postID={post._id}/>
                </div>
                
            </div>
        )
    })}
        </div>  
    
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    addLikes: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    unlike : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth,
    post: state.post
})

export default connect(mapStateToProps, {getPosts, addLikes, unlike, addComment})(Posts);