import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';

import './Education.css';

const Education = ({education}) =>{
    const schools = education.map(sch =>(
        <div key={sch._id} id='school-info'>
            <p>{sch.school}</p>
            <p>{sch.degree}</p>
            <p><Moment format='YYYY/MM/DD'>{moment.utc(sch.from)}</Moment></p>
            <div>
                <Link id='edit-school-btn'>Edit</Link>
            </div>
        </div>
    ))
    return schools;
}

export default Education;