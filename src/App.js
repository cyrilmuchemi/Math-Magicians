import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Heading } from './components/Heading';
import { Home } from './components/Home';
import { Calculator } from './components/Calculator';
import { Quote } from './components/Quote';

export class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Heading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
