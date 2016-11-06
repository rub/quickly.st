import React, { Component } from 'react';
import NavShare from '../NavShare/NavShare.js';
import NavSettings from '../NavSettings/NavSettings.js';
import NavHelp from '../NavHelp/NavHelp.js';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <h2>Nav</h2>
        <NavShare />
        <NavSettings />
        <NavHelp />
      </div>
    );
  }
}

export default Nav;
