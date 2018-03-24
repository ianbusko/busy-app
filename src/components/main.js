import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import EngineersPage from '../pages/engineers-page';
import Engineer from '../Engineer';
import EngineerFormPage from '../pages/engineer-form-page';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={EngineersPage}/>
          <Route exact path='/Engineer/:engineerId' component={Engineer}/>
          <Route path="/engineer/edit/:_id" component={EngineerFormPage}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
