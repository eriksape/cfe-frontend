import React, { Component } from 'react';
import { logosvg } from 'aps-assets'
import Style from './init.css';
import { Button } from 'react-toolbox/lib/button';

class Init extends Component {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.header}>
          <img src={logosvg} className={Style.logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={Style.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button label="Hello World!" />
      </div>
    );
  }
}

export default Init;
