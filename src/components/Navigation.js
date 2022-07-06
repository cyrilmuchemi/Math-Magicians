import React from 'react';
import { NavLink } from 'react-router-dom';

export class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        {
          id: 1,
          path: '/',
          text: 'Home',
        },
        {
          id: 2,
          path: '/Calculator',
          text: 'Calculator',
        },
        {
          id: 3,
          path: '/Quote',
          text: 'Quote',
        },
      ],
    };
  }

  render() {
    const { links } = this.state;
    return (
      <div className="Navigation">
        <ul>
          <li key={links[0].id}>
            <NavLink to={links[0].path}>
              {links[0].text}
            </NavLink>
          </li>
          <hr />
          <li key={links[1].id}>
            <NavLink to={links[1].path}>
              {links[1].text}
            </NavLink>
          </li>
          <hr />
          <li key={links[2].id}>
            <NavLink to={links[2].path}>
              {links[2].text}
            </NavLink>
          </li>
          <hr />
        </ul>
      </div>
    );
  }
}

export default Navigation;
