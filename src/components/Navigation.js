import React from 'react';

export class Navigation extends React.PureComponent {
  render() {
    return (
      <div className="Navigation">
        <ul>
          <li>
            Home
          </li>
          <hr />
          <li>
            Calculator
          </li>
          <hr />
          <li>
            Quote
          </li>
          <hr />
        </ul>
      </div>
    );
  }
}

export default Navigation;
