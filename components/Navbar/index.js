import React, { Component } from 'react';
import Link from 'next/link';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <nav>
        <div>
          <Link href='/'>
            <a title='Our API'>HOME</a>
          </Link>
          <Link href='/about'>
            <a title='About next JS'>About Next JS</a>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
