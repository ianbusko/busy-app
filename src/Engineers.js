import React, { Component } from "react";
import { getEngineers } from './api/engineersApi';

class Engineers extends Component {
  constructor (props){
    super(props);
    this.state = {
      users : [],
      loaded: false
    }
  }

  componentDidMount(){
    getEngineers().then(data =>{
      this.setState({ users: data.entity, loaded: true });
      console.log(data.entity);
    });
  }

  render() {
    const { users } = this.state;
    return (
      <article className='mw5 mw7-ns center bg-white pa3 ph5-ns sans-serif'>
        <header>
          <h1 className='mt0'>All Engineers</h1>
        </header>
        <p className='lh-copy'>Select an engineer below to see how busy he or she is. Please don't bother busy engineers.</p>

        
      </article>
    );
  }
}

export default Engineers;
