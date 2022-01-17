import React from 'react'

export default function FormSkinCancer(props) {
  const { newMole } = props.input

  return <form onSubmit={props.handleSubmit}>
    <br />
    <input className="heart-input" id="newMole" value={newMole} type="checkbox" placeholder="Heartbeats Counted" onChange={props.handleHeartInput} />
    {/* <label className="icon-weight-met">
      <i className="fas fa-weight fa-3x"></i>
    </label>  */}
    <br />
    <button className="imp-submit-button">{props.type}</button>
  </form>
}