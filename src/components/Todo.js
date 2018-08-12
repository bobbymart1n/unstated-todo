import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'unstated';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

type ListState = {
  todoList: array
}

class TodoContainer extends Container<ListState> {
  state = {
    todoList: [],
  }
  handleTodoSubmit = async (todo) => {
    await this.setState(state => {
      return { todoList: state.todoList.push(todo) }
    })
  }
}
// render() {
//   return (
//     <div>
//     <TodoInput />
//     <TodoList />
//     </div>
//   )
// }

export default TodoContainer
