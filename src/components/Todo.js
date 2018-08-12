import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'unstated';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class TodoContainer extends Container {
  state = {
    currentTodo: null
  }
  console.log(state);
}
// render() {
//   return (
//     <div>
//       <TodoInput />
//       <TodoList />
//     </div>
//   )
// }
export default TodoContainer
