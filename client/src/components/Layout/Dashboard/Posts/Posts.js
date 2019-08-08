import React, {useEffect}from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getPosts, addLikes, unlike} from '../../../../actions/post';
import Comments from './Comments/Comments';
import Spinner from '../../Spinner/Spinner';


const Posts = ({getPosts, addLikes, unlike, auth:{user}, post: {posts, loading}}) =>{
    useEffect(() =>{
        getPosts();
    },[getPosts])

    return loading && posts === null ? <Spinner/> : <div>{posts.map(post =>{
        return(
            <div key={post._id}>
                <p>{post.text}</p>
                <p onClick={() => addLikes(post._id)}>like</p>
                <p onClick={() => unlike(post._id)}>Unlike</p>
                <Comments postID={post._id}/>
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