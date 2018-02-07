import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBox from './components/ChatBox'

class App extends Component {

  render() {
    return (
      <div className="App">
       <ChatBox/>
      </div>
    );
  }
}

export default App;


