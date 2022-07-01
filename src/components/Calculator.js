import React, { useState } from 'react';
import calculate from '../logic/calculate';

export const Calculator = () => {
  const importedItems = {
    total: 0,
    next: null,
    operation: null,
  };

  const [text, setText] = useState(importedItems);

  const calculationBtn = (x) => {
    setText(() => calculate(text, x));
  };

  const { total, next, operation } = text;

  return (
    <div>
      <div className="Calculator">
        <div className="display">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <div className="operators">
          <button type="button" onClick={() => calculationBtn('AC')}>AC</button>
          <button type="button" onClick={() => calculationBtn('+/-')}>+/-</button>
          <button type="button" onClick={() => calculationBtn('%')}>%</button>
          <button className="orange" type="button" onClick={() => calculationBtn('÷')}>÷</button>
        </div>
        <div className="first-digits">
          <button type="button" onClick={() => calculationBtn('7')}>7</button>
          <button type="button" onClick={() => calculationBtn('8')}>8</button>
          <button type="button" onClick={() => calculationBtn('9')}>9</button>
          <button type="button" className="orange" onClick={() => calculationBtn('x')}>x</button>
        </div>
        <div className="second-digits">
          <button type="button" onClick={() => calculationBtn('4')}>4</button>
          <button type="button" onClick={() => calculationBtn('5')}>5</button>
          <button type="button" onClick={() => calculationBtn('6')}>6</button>
          <button type="button" className="orange" onClick={() => calculationBtn('+')}>+</button>
        </div>
        <div className="third-digits">
          <button type="button" onClick={() => calculationBtn('1')}>1</button>
          <button type="button" onClick={() => calculationBtn('2')}>2</button>
          <button type="button" onClick={() => calculationBtn('3')}>3</button>
          <button type="button" className="orange" onClick={() => calculationBtn('-')}>-</button>
        </div>
        <div className="bottom-digits">
          <button type="button" className="wide-button" onClick={() => calculationBtn('0')}>0</button>
          <button type="button" onClick={() => calculationBtn('.')}>.</button>
          <button type="button" className="orange" onClick={() => calculationBtn('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
