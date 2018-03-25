import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class EngineerForm extends Component {

  componentWillReceiveProps = (nextProps) => {
    const { engineer } = nextProps;
    if(engineer._id !== this.props.engineer._id) {
      this.props.initialize(engineer)
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="measure">
      <label className="f6 b db mb2">Name</label>
      <input {...input} placeholder={label} type={type} className="input-reset ba b--black-20 pa2 mb2 db w-100"/>
      { touched && error && <span className="error">{ error.message }</span>}
    </div>
  )

  renderDepthSelector = () => (
    <div className="measure">
      <label className="f6 b db mb2">Stack Depth</label>
      <label>
        How deep is this engineer in the stack?
        <select value={this.props.engineer.depth}>
          <option value="1">Not too deep</option>
          <option value="2">A little deep</option>
          <option value="3">Getting into the Zone</option>
          <option value="4">In the Zone</option>
          <option value="5">Plz don't bother</option>
        </select>
      </label>
    </div>
  )

  render(){
    const { handleSubmit, pristine, submitting, loading } = this.props;

    return (
      <form onSubmit={ handleSubmit } loading={ loading }className="pa4 black-80">
        <Field name="name" type="text" component={this.renderField} label="Name"/>
        <Field name="email" type="text" component={this.renderField} label="Email Address"/>
        <div className="measure">
          <label className="f6 b db mb2">Stack Depth</label>
          <div class="mb2">
            <Field name="favoriteColor" component="select">
              <option></option>
              <option value="1">Not too deep</option>
              <option value="2">A little deep</option>
              <option value="3">Getting into the Zone</option>
              <option value="4">In the Zone</option>
              <option value="5">Plz don't bother</option>
            </Field>
          </div>
        </div>
        <div className="measure">
          <button className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({form: 'engineer'})(EngineerForm);
