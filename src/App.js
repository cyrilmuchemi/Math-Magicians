import React, { Component } from 'react';
import './App.css';
import { Calculator } from './components/Calculator';
/* eslint-disable-next-line react/prefer-stateless-function */
export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Math Magicians</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
