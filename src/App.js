import React, { Component } from 'react';
import './App.css';
import Pomodoro from './Components/Pomodoro'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pomodoro pomodoro={7} breakTime={5} taskTime={25}/>
      </div>
    );
  }
}

export default App;
