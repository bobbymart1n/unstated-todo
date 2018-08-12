import React from 'react';
import { Subscribe } from 'unstated';
import TodoContainer from './Todo';
import TodoInput from './TodoInput';

const TodoList = () => {
  return (
      <div>
        <TodoInput/>
        <ul>
          <Subscribe to={[TodoContainer]}>
            {todoListArr => (
              todoListArr
            )}
          </Subscribe>
        </ul>
      </div>
  )
}

// {todoListArr => (
//   <li>
//     {todoListArr.state}
//   </li>
// )}

export default TodoList
