import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { fetchEngineer, saveEngineer, updateEngineer } from '../actions/engineer-actions';
import EngineerForm from '../components/engineer-form';

class EngineerFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchEngineer(_id)
    } else {
      // this.props.newContact();
    }  
  }

  submit = (engineer) => {
    if(!engineer.id) {
      return this.props.saveEngineer(engineer)
        .then(response => {
          this.setState({ redirect:true })
        })
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateEngineer(engineer)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
          throw new SubmissionError(this.props.errors)
        })
    }
  }

  render() {
    return (
      this.state.redirect ?
      <Redirect to="/" /> :
      <article className='mw5 mw7-ns center bg-white pa3 ph5-ns sans-serif'>
        <header>
          <h1 className='mt0'>Selected Engineer</h1>
        </header>
        <p className='lh-copy'>Please edit your engineer's information below. </p>
        <EngineerForm engineer={this.props.engineer} onSubmit={this.submit}/>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return {
      engineer : state.engineerStore.engineer
  }
}

export default connect(mapStateToProps, { fetchEngineer, saveEngineer, updateEngineer })(EngineerFormPage);
