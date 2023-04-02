import React, { useState } from 'react'

// Custom components
import Customform from './component/Customform'

function App() {

  const[task,setTask] = useState([]);

  const addTask = (task) =>{
    setTask(prevState=>[...prevState,task])
  }
  
  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>
    <Customform addTask={addTask}/>
    </div>
  )
}

export default App