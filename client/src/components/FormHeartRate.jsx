import React from 'react'

export default function FormHeartRate(props) {
  const { recordedBeats } = props.input

  return <form onSubmit={props.handleSubmit}>
    <br />
    <input className="" id="recordedBeats" value={recordedBeats} type="number" placeholder="Heartbeats Counted" onChange={props.handleHeartInput} />
    {/* <label className="icon-weight-met">
      <i className="fas fa-weight fa-3x"></i>
    </label>  */}
    <br />
    <button className="met-submit-button">{props.type}</button>
  </form>
}
