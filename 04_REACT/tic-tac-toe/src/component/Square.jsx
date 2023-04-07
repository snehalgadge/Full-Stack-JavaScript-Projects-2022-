import React from 'react'

const Square = (props) => {
  return (
    <div className='square'
    onClick={props.onClick}>
      <h3>{props.value}</h3>
    </div>
  )
}

export default Square
