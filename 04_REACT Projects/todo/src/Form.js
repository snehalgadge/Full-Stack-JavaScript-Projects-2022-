import React,{useState} from 'react';
import "./Form.css";


function Form() {

  const [text,setText]=useState("");
  const [todos,setTodos]=useState([]);
  // const [classs,setClasss]=useState("xyz");
  // const [tellcomplete,setTellComplete]=useState("Completed");

  const classs = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  const changetext=(event)=>{
    setText(event.target.value);
  };

  const handlesubmit=()=>{
     
      setTodos((todos)=>{
        const newtodos=[...todos,text];
        setText("");
        return newtodos;

      });
  };


  const handledelete=(i)=>{
    const newtodos=todos.filter((val,id)=>{
        return (i!==id);
    })
    setTodos(newtodos);
  };

  const handledeleteall=()=>{
  
    setTodos([]) 
  };



  return (
    <>
        <div className='formdiv'>
            <label className='formlabel'>Enter ToDo
                <input
                    className='forminput'
                    onChange={changetext}
                    type="text" 
                    placeholder='Enter Task of the Day'
                    value={text}                
                >            
                </input>
            </label>
            <button className='formbtn' onClick={handlesubmit}>SUBMIT</button>
        </div>
        {/* <ToDos 
            list={todos}
        >
        </ToDos> */}
        <ul>
            {todos!==[] && todos.map((val,i)=>{
                return (
                    <div key={i} className='ul-li'>
                        <li className={`li ${classs}`}>{val}</li>
                        {/* <button onClick={()=>handleedit(i)} className='edit'>Edit</button> */}
                        {/* <button onClick={()=>handlecomplete(i)} className='completed'>Completed</button> */}
                        <button onClick={()=>handledelete(i)} className='deleted'>Delete</button>
                    </div>
                )
            })}
        </ul>
        {todos.length>=2 && 
        <>
          <div className='deleteallbutton'>
              <button className='deleteallbutton-1' onClick={handledeleteall} >Delete all ToDos</button>
          </div>
        </>
        }
        
    </>
  )
};

export default Form;