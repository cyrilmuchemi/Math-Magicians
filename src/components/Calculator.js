import React from 'react';
import calculate from '../logic/calculate';

export class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  calculationBtn = (x) => {
    this.setState((s) => calculate(s, x));
  }

  render() {
    const { next, operation, total } = this.state;
    return (
      <div className="Calculator">
        <div className="display">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <div className="operators">
          <button type="button" onClick={() => this.calculationBtn('AC')}>AC</button>
          <button type="button" onClick={() => this.calculationBtn('+/-')}>+/-</button>
          <button type="button" onClick={() => this.calculationBtn('%')}>%</button>
          <button className="orange" type="button" onClick={() => this.calculationBtn('÷')}>÷</button>
        </div>
        <div className="first-digits">
          <button type="button" onClick={() => this.calculationBtn('7')}>7</button>
          <button type="button" onClick={() => this.calculationBtn('8')}>8</button>
          <button type="button" onClick={() => this.calculationBtn('9')}>9</button>
          <button type="button" className="orange" onClick={() => this.calculationBtn('x')}>x</button>
        </div>
        <div className="second-digits">
          <button type="button" onClick={() => this.calculationBtn('4')}>4</button>
          <button type="button" onClick={() => this.calculationBtn('5')}>5</button>
          <button type="button" onClick={() => this.calculationBtn('6')}>6</button>
          <button type="button" className="orange" onClick={() => this.calculationBtn('+')}>+</button>
        </div>
        <div className="third-digits">
          <button type="button" onClick={() => this.calculationBtn('1')}>1</button>
          <button type="button" onClick={() => this.calculationBtn('2')}>2</button>
          <button type="button" onClick={() => this.calculationBtn('3')}>3</button>
          <button type="button" className="orange" onClick={() => this.calculationBtn('-')}>-</button>
        </div>
        <div className="bottom-digits">
          <button type="button" className="wide-button" onClick={() => this.calculationBtn('0')}>0</button>
          <button type="button" onClick={() => this.calculationBtn('.')}>.</button>
          <button type="button" className="orange" onClick={() => this.calculationBtn('=')}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
