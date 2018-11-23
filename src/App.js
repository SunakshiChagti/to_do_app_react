import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      textValue: "",
      listValues: [],
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.addListItem = this.addListItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.completeItem = this.completeItem.bind(this);

  }
  onChangeHandler = (e) => {
    e.preventDefault();
    this.setState({
      textValue: e.target.value
    })
  }

  addListItem = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      if (this.state.textValue === "") {
        console.log("Please Enter Value");
      }
      else {
        this.state.listValues.push({
          key: Date.now(),
          value: this.state.textValue,
          status: false
        })
        this.setState({
          listValues: this.state.listValues,
          textValue: ""
        })
      }
    }
  }
  deleteItem = (e) => {
    for (var i = 0; i <= this.state.listValues.length; i++) {
      if (this.state.listValues[i] === e) {
        // delete this.state.listValues[i]; // it deletes the value but not index
        this.state.listValues.splice(this.state.listValues[i], 1)
      }
      else {
        this.setState({
          ...this.state
        })
      }
    }
    this.setState({
      listValues: this.state.listValues
    })
  }
  completeItem = (e) => {
    e.persist();
    this.state.listValues.status = e.target.checked

    if (e.target.checked === true) {
      console.log("true", e.target.value);
    }
    else {
      console.log("false", e.target.value);
    }

  }
  render() {
    return (
      <div className="App">
        <br /><br />
        <h1>TO DO LIST</h1>
        <input type="text" placeholder="Add a tasks to do in a list" value={this.state.textValue} onChange={this.onChangeHandler} onKeyUp={this.addListItem} autoFocus></input>
        <ul>
          {this.state.listValues.map((values) =>
            <li key={values.key}>
              <input type="checkbox" onChange={this.completeItem} value={values.value}
                defaultChecked={false} />{values.value}
              <button onClick={this.deleteItem.bind(this, values)}>X</button>
            </li>)}
        </ul>
      </div>
    );
  }
}
export default App;
