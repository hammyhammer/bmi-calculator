import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { findIconDefinition, icon } from '@fortawesome/fontawesome-svg-core'
library.add(fas, fab)

const glasses = findIconDefinition({ prefix: 'fas', iconName: 'glasses' })
const i = icon(glasses)

export default function FormImperial(props) {
  const { weightImperial, heightImperial } = props.input

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
        <input className="imp-height" id="heightImperial" value={heightImperial} type="number" placeholder="inches" onChange={props.handleImperialInput} />
        <label className="icon-height">
          <i className="fas fa-ruler-vertical fa-3x"></i>
        </label>

        <br />
        <button className="imp-submit-button">{props.type}</button>
      </form>
    </div>
  )
}
