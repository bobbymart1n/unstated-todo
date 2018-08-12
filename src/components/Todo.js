import { Container } from 'unstated';

type ListState = {
  currentTodo: string,
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

export default TodoContainer
