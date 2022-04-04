import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import formimperialcss from './FormImperial.module.css'
library.add(fas, fab);


export default function FormImperial(props) {
  const { weightImperial, heightFeet, heightInches } = props.input;

  return (
    <div>
      <br />
      <form onSubmit={props.handleSubmit}>
        <input className={formimperialcss.imp_weight} id="weightImperial" value={weightImperial} type="number" placeholder="pounds" onChange={props.handleImperialInput} />
        <label className="icon-weight">
          <i className="fas fa-weight fa-3x"></i>
        </label>
        <br />
        <br />
        <div className={formimperialcss.foot_inch}>
          <input className={formimperialcss.imp_feet} id="heightFeet" value={heightFeet} type="number" placeholder="feet" onChange={props.handleImperialInput} />
          <input className={formimperialcss.imp_inches} id="heightInches" value={heightInches} type="number" placeholder="inches" onChange={props.handleImperialInput} />
          <label className="icon-height">
            <i className="fas fa-ruler-vertical fa-3x"></i>
          </label>
        </div>

        <br />
        <button className={formimperialcss.submit}>{props.type}</button>
      </form>
    </div>
  );
};
