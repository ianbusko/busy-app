import React from 'react';
import ReactRadioButtonGroup from 'react-radio-button-group';

export default function ContactCardPage({engineer}) {

  return (
    <form className="pa4 black-80">
      <div className="measure">
        <label for="name" className="f6 b db mb2">Name</label>
        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
      </div>
      <div className="measure">
        <label for="email" className="f6 b db mb2">Email Address</label>
        <input id="email" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
      </div>
      <div className="measure">
        <label className="f6 b db mb2">Stack Depth</label>
        <label>
          How deep is this engineer in the stack?
          <select value={engineer.depth}>
            <option value="1">Not too deep</option>
            <option value="2">A little deep</option>
            <option value="3">Getting into the Zone</option>
            <option value="4">In the Zone</option>
            <option value="5">Plz don't bother</option>
          </select>
        </label>
      </div>
    </form>
  );
}
