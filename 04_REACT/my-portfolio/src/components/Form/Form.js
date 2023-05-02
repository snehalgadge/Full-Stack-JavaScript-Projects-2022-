import './Form.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <h1>Connect With Me</h1>
        <h3>Lets have a chit chat</h3>
      <form>
        <label>Your Name</label>
        <input type='text'/>
        <label>Email</label>
        <input type='email'/>
        <label>Subject</label>
        <input type='text'/>
        <label>Message</label>
        <textarea rows='6' placeholder='Type Your Message here'/>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form
