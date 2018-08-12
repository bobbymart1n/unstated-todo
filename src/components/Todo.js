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
    currentTodo: '',
    todoList: [],
  }
  handleTodoSubmit = async (e) => {
    e.preventDefault();
    await this.setState(state => {
      return state.todoList.push(state.currentTodo)
    });
  }
  handleTodoChange = async (e) => {
    await this.setState({ currentTodo: e.target.value })
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
