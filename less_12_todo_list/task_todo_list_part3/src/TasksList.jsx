import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList, updateTask, deleteTask } from './tasksGateway';
//Algo #1
//const baseUrl = 'https://crudcrud.com/api/a04a832414524a4baed95f2560931ca4/tasks';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList => {
      this.setState({ tasks: tasksList });
    });
  };

  onCreate = text => {
    const newTask = {
      text,
      done: false, //default
    };

    createTask(newTask).then(() => this.fetchTasks());
  };
  //add class line
  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      ...text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks);
  };

  //delete Task
  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTasks);
  };

  render() {
    //sort done or not
    //slice(it doesn't mutate)
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    //
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            //console.log('task', task),
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
//const baseUrl = 'https://62da6554e56f6d82a760650f.mockapi.io/api/todolist/v1/todoTasks';
