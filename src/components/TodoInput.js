import React from 'react';

const TodoInput = (props) => {
  return (
    <div>
      <input placeholder='Enter something todo'/>
      <button type='submit' onClick={props.onSubmitTodo}>+</button>
    </div>
  )
}

export default TodoInput
