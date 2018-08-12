import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { Provider } from 'unstated';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
