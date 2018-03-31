import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import EngineersPage from '../pages/engineers-page';
import EngineerFormPage from '../pages/engineer-form-page';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={EngineersPage}/>
          <Route path="/engineer/new" component={EngineerFormPage}/>
          <Route path="/engineer/edit/:_id" component={EngineerFormPage}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
