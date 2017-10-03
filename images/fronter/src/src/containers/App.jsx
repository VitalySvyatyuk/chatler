import React, { Component } from 'react';
import {render} from 'react-dom';
import './App.css';
import ChatString from '../components/ChatString.jsx';
import ChatWindow from '../components/ChatWindow.jsx';


export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      phrases: ["First phrase"],
      message: "Hello"
    }
  }

  handleClick() {
    const newArray = this.state.phrases.slice()
    newArray.unshift(this.state.message)
    this.setState({
      phrases: newArray,
      message: ""
    })
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <ChatString 
          onClick={this.handleClick.bind(this)}
          message={this.state.message}
          onChange={this.handleChange.bind(this)}
          />
        <ChatWindow 
          value={this.state.phrases} 
          />
      </div>
    );
  }
}