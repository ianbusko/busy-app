import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Engineers from '../Engineers';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Engineers}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
