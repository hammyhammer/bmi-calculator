import React from 'react'

export default function FormHeartRate(props) {
  const { recordedBeats } = props.input

  return <form onSubmit={props.handleSubmit}>
    <br />
    <input className="heart-input" id="recordedBeats" value={recordedBeats} type="number" placeholder="Heartbeats Counted" onChange={props.handleHeartInput} />
    <label className="icon-heart">
      <i class="fas fa-heartbeat fa-5x"></i>
    </label>
    <br />
    <button className="imp-submit-button">{props.type}</button>
  </form>
}
