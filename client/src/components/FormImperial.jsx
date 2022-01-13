import React from 'react'

export default function FormImperial(props) {
  const { weightImperial, heightImperial } = props.input

  return (
    <div>
      <br />
      <form onSubmit={props.handleSubmit}>
        <input className="imp-weight" id="weightImperial" value={weightImperial} type="number" placeholder="pounds" onChange={props.handleImperialInput} />
        {/* <label>weight</label> */}
        <br />
        <br />
        <input className="imp-height" id="heightImperial" value={heightImperial} type="number" placeholder="inches" onChange={props.handleImperialInput} />
        {/* <label>height</label> */}
        <br />
        <button className="imp-submit-button">{props.type}</button>
      </form>
    </div>
  )
}
