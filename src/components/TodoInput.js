import React from 'react';

const TodoInput = (props) => {
  const todoInput = {
    padding: '15px',
    flex: '2',
    borderRadius: '8px 0 0 8px',
    border: '1px solid steelblue',
    borderRight: 'none'
  }
  const todoButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    border: '1px solid steelblue',
    borderRadius: '0 8px 8px 0',
    background: 'steelblue',
    color: '#fff',
    fontSize: '20px',
    flex: '0.5',
    padding: '0'
  }
  const form = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'cetner',
    maxWidth: '300px',
    height: '45px',
    margin: 'auto',
    marginTop: '300px',
    position: 'relative'
  }
  return (
    <div>
      <form style={form} onSubmit={props.onSubmitTodo}>
        <input placeholder='Enter something todo' style={todoInput} onChange={props.onTextChange}/>
        <button style={todoButton} type='submit'>+</button>
      </form>
    </div>
  )
}

export default TodoInput
