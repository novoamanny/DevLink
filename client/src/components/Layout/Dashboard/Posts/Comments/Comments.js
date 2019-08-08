import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {addComment, getPosts} from '../../../../../actions/post';


import Spinner from '../../../Spinner/Spinner';
import Posts from '../Posts';


import './Comments.css';




const Comments = ({getPosts, addComment, post:{posts, loading}, postID}) =>{

    useEffect(() =>{
        getPosts();
    }, [getPosts])
   

    const [text, setText] = useState('');


    const onSubmit = async e =>{
        e.preventDefault();
        addComment({text}, postID);
        setText('');
        
    }

    return loading && posts === null ? <Spinner/> :
    <div>
        <form onSubmit={(e) => onSubmit(e)}>
            <div id='post-comment-input'>
                <div id='textarea-container-comments'>
                    <textarea name='text' type='text' cols='30' rows='5' placeholder='Create A Post' value={text} onChange={e => setText(e.target.value)} required/>
                </div>
                <div id='submit-post-btn-comments'>
                    <input type='submit' value='Submit'/>
                </div>
            </div>
        
        </form>
        {posts.map(post =>{
            if(post._id === postID){
                return post.comments.map(comment =>(
                    
                    <div key={comment._id} id='comments-container'>
                        <p>{comment.text}</p>
                        <p>{comment.name}</p>
                    </div>
                ))
            }
        })}
        
    </div>
}

Comments.propTypes ={
    getPosts: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
    
    
}

const mapStateToProps = state =>({
    auth: state.auth,
    post: state.post
})

export default connect(mapStateToProps,{getPosts, addComment})(Comments);