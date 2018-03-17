import React, { Component } from "react";
import styles from './Engineers.css.js';
import { getEngineers } from './api/engineersApi';

const getStatusIndicator = (depth) => {
  let depthClass = ``;
  if(depth >= 4){
    depthClass = `red`;
  } else if (depth > 1){
    depthClass = `yellow`;
  } else {
    depthClass = `green`;
  }
  return `bg-${depthClass}`;
}

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

        <table className="f6 w-100 mw8 center" cellSpacing="0">
          <thead>
            <tr className="stripe-dark">
              <th className="fw6 tl pa3 bg-white">Status</th>
              <th className="fw6 tl pa3 bg-white">Name</th>
              <th className="fw6 tl pa3 bg-white">Email</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
          {users.map((user, index) => {
            return(
              <tr className="stripe-dark">
                <td className="pa3">
                  <span className={ getStatusIndicator(user.depth) } style={styles.indicator}></span>
                </td>
                <td className="pa3">{user.name}</td>
                <td className="pa3">{user.email}</td>
              </tr>
            )
          }, this)}
          </tbody>
        </table>

      </article>
    );
  }
}

export default Engineers;
