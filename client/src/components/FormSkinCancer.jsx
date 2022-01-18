import React from 'react'

export default function FormSkinCancer(props) {
  const { newMole } = props.input

  return <form onSubmit={props.handleSubmit}>
    <p></p><input className="skin-input" id="newMole" value={newMole} type="checkbox" placeholder="Please check if yes" onChange={props.handleHeartInput} />
    <br />
    <button className="skin-submit-button">{props.type}</button>
  </form>
}