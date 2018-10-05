import React, { Component } from 'react'
import './App.css'
import {TodoList, TodoForm} from './components/todo'
import { addTodo, generateId, findById, toggleTodo, updateTodo, clearCompleted } from './lib/todoHelpers'
import { pipe, partial } from './lib/utils'
// import {firebaseRef} from './lib/firebaseRef'

class App extends Component {


  state = {
    todos: [],
    currentText: '',
    errorMessage: ''
  }

  componentDidMount(){
    // const listRef = firebaseRef.ref().child('item')
    // listRef.on('value', snapshot => {
    //   console.log(snapshot.val())
    // })
  }

  handleTextChange = (evt) => {
    this.setState({currentText: evt.target.value })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId , name: this.state.currentText, isCompleted: false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      currentText: '',
      todos: updatedTodos,
      errorMessage: ''
    })
  }

  handleClear = () => {
    var clearedTodos = clearCompleted(this.state.todos)
    this.setState({
      todos: clearedTodos
    })
  }

  handleToggle = (id) => {

    var toggle = pipe(findById,toggleTodo, partial(updateTodo,this.state.todos))

    var updatedTodo = toggle(id, this.state.todos)

    this.setState({todos: updatedTodo})
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo'
    })
  }

  render() {
    const submitHandler = this.state.currentText ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className="App">
        <div className="App-header">
          <h2>Todos for You</h2>
        </div>
        <div className="todo">
          { this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm clear={this.handleClear} handleFormSubmit={submitHandler} currentText={this.state.currentText} onTextChange={this.handleTextChange} />
          <TodoList todos={this.state.todos} handleToggle={this.handleToggle}/>
        </div>
      </div>
    )
  }
}


export default App;
