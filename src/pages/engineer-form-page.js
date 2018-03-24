import React, { Component} from 'react';
import { Redirect } from 'react-router';
// import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { fetchEngineer } from '../actions/engineer-actions';
import EngineerForm from '../components/engineer-form';
// import ContactForm from '../components/contact-form';


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


  render() {

    return (
      <article className='mw5 mw7-ns center bg-white pa3 ph5-ns sans-serif'>
        <header>
          <h1 className='mt0'>Selected Engineer</h1>
        </header>
        <p className='lh-copy'>Please edit your engineer's information below. </p>
        <EngineerForm />
      </article>
    );
  }
}



function mapStateToProps(state) {
  return {
      engineers : state.engineerStore.engineers
  }
}

export default connect(mapStateToProps, { fetchEngineer })(EngineerFormPage);
