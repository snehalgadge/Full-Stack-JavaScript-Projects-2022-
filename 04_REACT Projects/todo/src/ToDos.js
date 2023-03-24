import React from 'react';

function ToDos({todos}) {
  return (
    <>
        <p>ToDo App</p>
        <ul>
            {todos.map(val=>{
                return (
                    <li key={val}>{val}</li>
                )
            })}
        </ul>
    </>
  );
};

export default ToDos;