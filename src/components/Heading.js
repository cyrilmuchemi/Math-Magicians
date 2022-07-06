import React from 'react';
import { Navigation } from './Navigation';

export class Heading extends React.PureComponent {
  render() {
    return (
      <div>
        <Navigation />
        <h1>Math Magicians</h1>
      </div>
    );
  }
}

export default Heading;
