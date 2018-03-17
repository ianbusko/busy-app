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
    console.log(users);
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
                <td className="pa3">Hassan Johnson</td>
                <td className="pa3">{user.name}</td>
                <td className="pa3">{user.email}</td>
              </tr>
            )
          })}
          </tbody>
        </table>

      </article>
    );
  }
}

export default Engineers;
