import React, {useEffect}from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getUserPosts} from '../../../../actions/post';
import Spinner from '../../Spinner/Spinner';

import './PostProfile.css';


const PostsProfile = ({getUserPosts, auth:{user}, post: {myPosts, loading}}) =>{
    useEffect(() =>{
        getUserPosts();
    },[getUserPosts])

    

    return loading && myPosts === null ? <Spinner/> : <div className='post-profile-container'>{myPosts.map(post =>{
        return(
            <div key={post._id} className='post-profile'>
                <p>{post.text}</p>
                <p>{post.name}</p>
                {post.comments.map(comment =>(
                    <div key={comment._id} className='post-profile-comments'>
                        <p>{comment.text}</p>
                        <p>{comment.name}</p>
                    </div>
                ))}
            </div>
        )
    })}
        </div>  
    
}

PostsProfile.propTypes = {
    getUserPosts: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth,
    post: state.post
})

export default connect(mapStateToProps, {getUserPosts})(PostsProfile);