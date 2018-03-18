import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Engineers from '../Engineers';
import Engineer from '../Engineer';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Engineers}/>
          <Route exact path='/Engineer' component={Engineer}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
