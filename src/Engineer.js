import React, { Component } from 'react';
import { getEngineer } from './api/engineersApi';

const getStatusIndicator = (depth) => {
  if(depth > 4){
    return `Very busy`;
  } else if (depth > 1){
    return `A little busy`;
  } else {
    return `Not very busy - stop on over`;
  }
}

class Engineer extends Component {
  constructor (props){
    super(props);
    this.state = {
      user: [],
      loaded: false
    }
  }

  componentDidMount(){
    getEngineer(this.props.match.params.engineerId).then(data =>{
      this.setState({ user: data.entity, loaded: true });
    });
  }

  render() {
    const user = this.state.user;

    return (
      <article className='mw5 mw7-ns center bg-white pa3 ph5-ns sans-serif'>
        <p>Engineers are busy people. If your engineer is busy, please give him or her some space.</p>
        <h1>{user.name}</h1>
        <div className="mt3">
          <label class="db fw6 lh-copy f6" for="email-address">Email</label>
          <span Name="email-address">{user.email}</span>
        </div>
        <div className="mt3">
          <label class="db fw6 lh-copy f6" for="email-address">Status</label>
          <span Name="email-address">{getStatusIndicator(user.depth)}</span>
        </div>
      </article>
    );
  }
}

export default Engineer;
