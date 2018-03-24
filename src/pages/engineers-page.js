import React, { Component } from 'react';
import { fetchEngineers } from '../actions/engineer-actions';
import { connect } from 'react-redux';
import EngineersTable from '../components/engineers-table';

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

        <EngineersTable engineers={this.props.engineers} />
      </article>
    );
  }
}

function mapStateToProps(state) {
  return {
      engineers : state.engineerStore.engineers
  }
}

export default connect(mapStateToProps, { fetchEngineers })(EngineersPage);
