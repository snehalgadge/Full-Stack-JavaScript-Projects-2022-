import './WorkCards.css';

import React from 'react'

import WorkCardData from './WorkCards';
import ProjectCardData from './WorkCardData';
import WorkCards from './WorkCards';

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {ProjectCardData.map((val, index) =>{
                return(
                  <WorkCards
                  key={index}
                  imgsrc = {val.imgsrc}
                  title = {val.title}
                  text = {val.text}
                  view = {val.view}
                  source = {val.source}
                  />
                )
            })}
        </div>
    </div>
  )
}

export default Work