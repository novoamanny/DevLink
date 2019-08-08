import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {addComment, getPosts} from '../../../../../actions/post';


import Spinner from '../../../Spinner/Spinner';




const Comments = ({getPosts, addComment, post:{posts, loading}, postID}) =>{

    
   

    const [text, setText] = useState('');


    const onSubmit = async e =>{
        e.preventDefault();
        addComment({text}, postID);
        setText('');
        
    }

    return loading && posts === null ? <Spinner/> :
    <div>
        <form onSubmit={(e) => onSubmit(e)}>
        <textarea name='text' type='text' cols='30' rows='5' placeholder='Create A Post' value={text} onChange={e => setText(e.target.value)} required/>
        <input type='submit' value='Submit'/>
        </form>
        {posts.map(post => {
            if(post._id === postID){
                return (
                    post.comments.map(comment =>(
                        <p key={comment._id} style={{paddingTop: '20px'}}>{comment.text}</p>
                    ))
                );
            }
        })}
    </div>
}

Comments.propTypes ={
    getPosts: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
    
    
}

const mapStateToProps = state =>({
    
    post: state.post
})

export default connect(mapStateToProps,{getPosts, addComment})(Comments);