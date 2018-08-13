import React from 'react';
import { Subscribe } from 'unstated';
import TodoContainer from './Todo';
import TodoInput from './TodoInput';

const TodoList = () => {
  const todoList = {
    listStyle: 'none',
    maxWidth: '300px',
    margin: 'auto',
  }
  const todoListItem = {
    borderBottom: '1px solid steelblue',
    padding: '20px',
  }
  return (
      <Subscribe to={[TodoContainer]}>
      {todoListArr => (
        <div>
          <TodoInput onTextChange={todoListArr.handleTodoChange} onSubmitTodo={todoListArr.handleTodoSubmit}/>
          <ul style={todoListArr.state.todoList.length > 0 ? todoList : null}>
              {todoListArr.state.todoList.map((todo, index) => {
                return <li style={todoListItem} key={index}>{todo}</li>
              })}
          </ul>
        </div>
      )}
      </Subscribe>
  )
}

// {todoListArr => (
//   <li>
//     {todoListArr.state}
//   </li>
// )}

export default TodoList
