import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';
import Stuff from '../Stuff';
import Contact from '../Contact';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/stuff' component={Stuff}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
