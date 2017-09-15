import React, { Component } from 'react';
import {render} from 'react-dom';
import './App.css';

// Input Component
function ChatString(props) {
  return (
    <div className="chatstring">
      <input type="text" name="chatstring" />
      <button onClick={props.onClick} type="button">Send</button>
    </div>
  )
}

// Window Component
function ChatWindow(props) {
  const phrases = props.value.map((phrase, index) => {
    return (
      <div key={index} className="chatwindow">
        <p>{phrase}</p>
      </div>
    )
  });
  return <div>{phrases}</div>
}

// Parent Component
class Chat extends Component {
  constructor() {
    super();
    this.state = {
      phrases: ["Hello"]
    }
  }

  handleClick() {
    const newArray = this.state.phrases.slice()
    newArray.unshift("Add something")
    this.setState({
        phrases: newArray
    })
  }

  render() {
    return (
      <div className="container">
        <ChatString onClick={val => this.handleClick()} />
        <ChatWindow value={this.state.phrases} />
      </div>
    );
  }
}

render(<Chat/>, document.getElementById('root'));
