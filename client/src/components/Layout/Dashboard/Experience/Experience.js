import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';

import './Experience.css';

const Experience = ({experience }) =>{
    const experiences = experience.map(exp =>(
        <div key={exp._id} id='exp-info'>
            <p>{exp.company}</p>
            <p>{exp.title}</p>
            <p><Moment format='YYYY/MM/DD'>{moment.utc(exp.from)}</Moment></p>
            <div>
                <Link id='edit-exp-btn'>Edit</Link>
            </div>
        </div>
    ))
    return experiences;
}

export default Experience;