import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { findIconDefinition, icon } from '@fortawesome/fontawesome-svg-core'
library.add(fas, fab)

const glasses = findIconDefinition({ prefix: 'fas', iconName: 'glasses' })
const i = icon(glasses)

export default function FormImperial(props) {
  const { weightImperial, heightFeet, heightInches } = props.input

  return (
    <div>
      <br />
      <form onSubmit={props.handleSubmit}>
        <input className="imp-weight" id="weightImperial" value={weightImperial} type="number" placeholder="pounds" onChange={props.handleImperialInput} />
        <label className="icon-weight">
          <i className="fas fa-weight fa-3x"></i>
        </label>
        <br />
        <br />
        <div className="foot-inch">
          <input className="imp-feet" id="heightFeet" value={heightFeet} type="number" placeholder="feet" onChange={props.handleImperialInput} />
          <input className="imp-inches" id="heightInches" value={heightInches} type="number" placeholder="inches" onChange={props.handleImperialInput} />
          <label className="icon-height">
            <i className="fas fa-ruler-vertical fa-3x"></i>
          </label>
        </div>

        <br />
        <button className="imp-submit-button">{props.type}</button>
      </form>
    </div>
  )
}
