import React from 'react';

export class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="Calculator">
        <div className="display">
          <span>0</span>
        </div>
        <div className="operators">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button className="orange" type="button">+</button>
        </div>
        <div className="first-digits">
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="orange">*</button>
        </div>
        <div className="second-digits">
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="orange">-</button>
        </div>
        <div className="third-digits">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="orange">-</button>
        </div>
        <div className="bottom-digits">
          <button type="button" className="wide-button">0</button>
          <button type="button">.</button>
          <button type="button" className="orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
