import React, { Component} from 'react';
import { Redirect } from 'react-router';
// import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { fetchEngineer } from '../actions/engineer-actions';
// import ContactForm from '../components/contact-form';


class EngineerFormPage extends Component {}



function mapStateToProps(state) {
  return {
      engineers : state.engineerStore.engineers
  }
}

export default connect(mapStateToProps, { fetchEngineer })(EngineerFormPage);
