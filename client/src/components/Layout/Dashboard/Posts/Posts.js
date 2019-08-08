import React, {useEffect}from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

import {getPosts, addLikes, unlike} from '../../../../actions/post';
import Comments from './Comments/Comments';
import Spinner from '../../Spinner/Spinner';

import './Posts.css'


const Posts = ({getPosts, addLikes, unlike, auth:{user}, post: {posts, loading}}) =>{
    useEffect(() =>{
        getPosts();
    },[getPosts])


    const slideHandle = () =>{
        document.getElementById('comments-slider').style.maxHeight = '30em';
    }

    return loading && posts === null ? <Spinner/> : <div>{posts.map(post =>{
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
                    <p onClick={() => slideHandle()}>Comments</p>
                </div>
                <div id='comments-slider'>
                    <Comments postID={post._id}/>
                </div>
                
            </div>
        )
    })}
        </div>  
    
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    addLikes: PropTypes.func.isRequired,
    unlike : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth,
    post: state.post
})

export default connect(mapStateToProps, {getPosts, addLikes, unlike})(Posts);