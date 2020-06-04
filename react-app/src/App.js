import React, { Component } from "react";
import "./App.css";
import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: "todo1つ目", id: 0 },
        { title: "todo2つ目", id: 1 },
      ],
      uniqueId: 1,
    };
    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }
  addTodo(title) {
    const { tasks, uniqueId } = this.state;
    const newTask = [...tasks, { title, id: uniqueId + 1 }];
    console.log(newTask);
    this.setState({ tasks: newTask, uniqueId: uniqueId + 1 });
  }

  resetTodo() {
    this.setState({
      tasks: [],
    });
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;
