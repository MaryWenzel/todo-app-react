import React, { Component } from 'react';
import TodoCard from './TodoCard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      inputValue: "",
      listOfTodos: []
    }
  }

  handleClick = () => {
    this.state.isClicked ? 
    this.setState({isClicked : false}) : 
    this.setState({isClicked : true})
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }
 
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
    this.setState({inputValue: ""})
  }

  deleteItem = (index) => {
    console.log("was clicked", index)
    let listCopy = this.state.listOfTodos
    listCopy.splice(index, 1)
    this.setState({ listOfTodos: [...listCopy] })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
          <button type="submit">Submit</button>
        </form>
        <ol>{this.state.listOfTodos.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}</ol>
        <p>
          {this.state.isClicked ? "true" : "false"}
        </p>
        {this.state.listOfTodos.map((todo, index) => {
              return <TodoCard key={index} index={index} title={todo} 
              clickToRemove={this.deleteItem}/>
            })}
            {this.props.name}
      </header>
    </div>
  );
}
}

export default App;
