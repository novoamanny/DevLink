import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCurrentProfile} from '../../../actions/profile';

import PostsProfile from './PostsProfile/PostsProfile'
import Spinner from '../Spinner/Spinner';


const Profile = ({getCurrentProfile, auth:{user}, profile:{profile, loading}}) =>{
    useEffect(() =>{
        getCurrentProfile();
    }, [getCurrentProfile])

    return loading && profile === null ? <Spinner/> :
        <div className='profile-container'>
            <div className='profile-UI' style={{paddingTop: '100px', color: 'black'}}>
                {/* Need to work on the UI Profile */}
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{console.log(profile)}</p>
                <PostsProfile/>
            </div>
        </div>

    
}

Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
   
}


const mapStateToProps = state =>({
    auth: state.auth,
    profile: state.profile,
    
})

export default connect(mapStateToProps, {getCurrentProfile})(Profile);