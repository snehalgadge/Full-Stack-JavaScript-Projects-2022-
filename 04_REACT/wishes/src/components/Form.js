import React, {useState} from 'react'

const Form = () => {
    const handleClick = () =>{
        setText("Clicked");
    } 

    const handleChange = () =>{
        console.log("chnage");
    }
    
  const [text , setText] = useState('Enter Text here');

  return (
    <>
      <div className="login-box">
      <h2>Convert Your Text</h2>
      <form>
    <div class="user-box">
      <input type="text" name="" required="" onChange={handleChange}/>
      <label>Enter Your Text</label>
    </div>
    <div className='btn'>
    <a href="#" onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      UPPER CASE
    </a>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      lower case
    </a>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Capitalize
    </a>
   </div>
  </form>
</div>
    </>
  );
}

export default Form
