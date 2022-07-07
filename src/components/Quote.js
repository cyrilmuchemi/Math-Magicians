import React from 'react';

export class Quote extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="math-quote">
          <p>
            Mathematics as an expression of the human mind
            reflects the active will, the contemplative reason,
            and the desire for aesthetic perfection.
            Its basic elements are logic and intuition,
            analysis and construction, generality and individuality.
          </p>
          <div className="math-speaker">
            <p>
              Richard Courant, German-American mathematician
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
