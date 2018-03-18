import React, { Component } from 'react';
import { getEngineer } from './api/engineersApi';

class Engineer extends Component {
  constructor (props){
    console.log(props);
    super(props);
    this.state = {
      user: [],
      loaded: false
    }
  }

  render() {
    return (
      <article className='mw5 mw7-ns center bg-white pa3 ph5-ns sans-serif'>
        <h2>HELLO</h2>
      </article>
    );
  }
}

export default Engineer;
