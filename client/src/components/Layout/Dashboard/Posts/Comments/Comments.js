import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Moment from 'react-moment';
import moment from 'moment';

import { getPosts, addComment} from '../../../../../actions/post';


import Spinner from '../../../Spinner/Spinner';
import Posts from '../Posts';


import './Comments.css';




const Comments = ({getPosts, addComment, auth:{user}, post:{posts, loading}, postID}) =>{

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
    <div id='comment-section'>
        
        <form id='post-comment-input' onSubmit={(e) => onSubmit(e)}>
                
                <div id='textarea-container-comments'>
                    <textarea name='text' type='text' cols='30' rows='5' placeholder='Post A Comment' value={text} onChange={e => setText(e.target.value)} required/>
                </div>
                <div id='submit-post-btn-comments'>
                    <input type='submit' value='Submit'/>
                </div>
        </form>

        
        <div >
        {posts.map(post =>{
            if(post._id === postID){
                return post.comments.map(comment =>(
                    
                    <div key={comment._id} id='comments-container'>
                        <div id='delete-comment'>
                            {user._id === comment.user && <i className='delete-comment-btn'>X</i>}
                        </div>

                        <div id='comment' style={{width: '100%'}}>
                            <h3>{comment.text}</h3>
                        </div>
                        <div id='comment-info'>
                            <p>{comment.name}</p>
                            <p><Moment format='YYYY/MM/DD'>{moment.utc(comment.date)}</Moment></p>
                        </div>
                    </div>
                ))
            }
        })}
        </div>
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