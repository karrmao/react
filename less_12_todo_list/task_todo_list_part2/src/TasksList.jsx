import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

class TasksList extends Component {
  state = {
    tasks: [
      { text: 'Buy milk', done: false, id: 1 },
      { text: 'Pick up Tom from airport', done: false, id: 2 },
      { text: 'Visit party', done: false, id: 3 },
      { text: 'Visit doctor', done: true, id: 4 },
      { text: 'Buy meat', done: true, id: 5 },
    ],
  };
  //Algo #2
  onCreate = text => {
    const { tasks } = this.state;

    const newTask = {
      id: Math.random(),
      text,
      done: false, //default
    };
    //Algo #3
    const updatedTasks = tasks.concat(newTask);
    //update Tasks
    this.setState({ tasks: updatedTasks });
  };
  //add class line
  handleTaskStatusChange = id => {
    // 1. Find task in a list
    // 2. Toggel done value
    // 3. Save update list
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    //update Tasks
    this.setState({ tasks: updatedTasks });
  };

  //delete Task
  handleTaskDelete = id => {
    // 1. Filter tasks
    // 2. Update state
    //will leave task whose does not match with id()
    const updatedTasks = this.state.tasks.filter(task => task.id !== id);
    //update Tasks
    this.setState({ tasks: updatedTasks });
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
//<Task id={task.id} done={task.done} text={task.text} />
// {this.state.tasks.map(task => ) change=>  sortedList.map(task => )
