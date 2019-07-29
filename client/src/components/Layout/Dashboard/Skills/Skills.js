import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


import './Skills.css';

const Skills = ({skills }) =>{
    const skillList = skills.map(skill =>(
            <div key={skill} id='skill'>
                <p >{skill}</p>
            </div>
    ))

    

    return (
        <div id='skills-container'>
            <div id='skillList'>   
                {skillList}
            </div>
            
            <div id='skill-btn-container'>
                <Link id='edit-skills-btn' to='/edit/skills'>Edit</Link>
            </div>
        </div>
    );
}

export default Skills