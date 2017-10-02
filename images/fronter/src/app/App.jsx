import React, { Component } from 'react';
import {render} from 'react-dom';
import './App.css';

// Input Component
function ChatString(props) {
  return (
    <div className="chatstring">
      <input onChange={props.onChange} type="text" name="chatstring" value={props.message}/>
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

render(<Chat/>, document.getElementById('root'));
