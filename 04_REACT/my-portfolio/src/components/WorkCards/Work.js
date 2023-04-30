import './WorkCards.css';

import React from 'react'
import WorkCardData from './WorkCards';
import ProjectCardData from './WorkCardData';

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {WorkCardData.map((val, index) =>{
                return(

                )
            })}
        </div>
    </div>
  )
}

export default Work