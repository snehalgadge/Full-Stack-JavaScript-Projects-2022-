import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Customform = ({addTask}) => {
    const [task, setTask] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        addTask({
            name:task,
            checked:false,
            id:Date.now()
        });
        setTask("");
    }

  return (
    <form className='todo' 
     onSubmit={handleSubmit}>
      <div className='wrapper'>
        <input 
         type={Text} 
         id={'task'}
         className='input' 
         value={task} 
         onInput={(e) => setTask(e.target.value)} 
         required 
         autoFocus
         maxLength={60}
         placeholder='Enter task'/>
        <label for='task'
         className='label'>Enter Task</label>
      </div>
      <button className='btn'
        aria-label='Add Task'
        type='submit'>
            Add
            <FontAwesomeIcon icon="fa-lg fa-clipboard-check" />
        </button>
    </form>
  )
}

export default Customform
