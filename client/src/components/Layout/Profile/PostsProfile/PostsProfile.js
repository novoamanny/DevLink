import React, {useEffect}from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getUserPosts} from '../../../../actions/post';
import Spinner from '../../Spinner/Spinner';


const PostsProfile = ({getUserPosts, auth:{user}, post: {myPosts, loading}}) =>{
    useEffect(() =>{
        getUserPosts();
    },[getUserPosts])

    

    return loading && myPosts === null ? <Spinner/> : <div>{myPosts.map(post =>{
        return(
            <h1 key={post._id}>{post.text}</h1>
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