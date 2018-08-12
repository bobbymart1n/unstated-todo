import React from 'react';
import { Subscribe } from 'unstated';
import TodoContainer from './Todo';
import TodoInput from './TodoInput';

const TodoList = () => {
  return (
      <Subscribe to={[TodoContainer]}>
      {todoListArr => (
        <div>
          <TodoInput onSubmitTodo={todoListArr.handleTodoSubmit}/>
          <ul>
              {todoListArr.state.todoList.map((todo) => {
                <li>{todo}</li>
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
