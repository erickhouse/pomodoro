import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pomodoro from './Components/Pomodoro'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pomodoro pomodoro={5}/>
      </div>
    );
  }
}

export default App;
