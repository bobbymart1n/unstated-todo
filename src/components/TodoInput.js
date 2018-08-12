import React from 'react';

const TodoInput = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmitTodo}>
        <input placeholder='Enter something todo' onChange={props.onTextChange}/>
        <button type='submit'>+</button>
      </form>
    </div>
  )
}

export default TodoInput
