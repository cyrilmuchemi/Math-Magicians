import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Quote } from './components/Quote';

export class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <h1>Math Magicians</h1>
        <Navigation />
        <Quote />
      </div>
    );
  }
}

export default App;
