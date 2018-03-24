import React, { Component } from 'react';
import styles from './Engineers.css.js';
import { fetchEngineers } from '../actions/engineer-actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const getStatusIndicator = (depth) => {
  if(depth >= 4){
    return `red`;
  } else if (depth > 1){
    return `yellow`;
  } else {
    return `green`;
  }
}

class EngineersPage extends Component {

  componentDidMount(){
    this.props.fetchEngineers();
  }

  render() {

    return (
      <article className='mw5 mw7-ns center bg-white pa3 ph5-ns sans-serif'>
        <header>
          <h1 className='mt0'>All Engineers</h1>
        </header>
        <p className='lh-copy'>Select an engineer below to see how busy he or she is. Please don't bother busy engineers.</p>

      </article>
    );
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
      engineers : state.engineerStore.engineers
  }
}

export default connect(mapStateToProps, { fetchEngineers })(EngineersPage);
