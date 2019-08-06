import React, {useEffect}from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getPosts} from '../../../../actions/post';
import Spinner from '../../Spinner/Spinner';


const Posts = ({getPosts, post: {posts, loading}}) =>{
    useEffect(() =>{
        getPosts();
    },[getPosts])

    return loading && posts === null ? <Spinner/> : <div>{posts.map(post =>{
        return(
            <div key={post._id}>
                <p>{post.text}</p>
            </div>
        )
    })}
        </div>  
    
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    post: state.post
})

export default connect(mapStateToProps, {getPosts})(Posts);