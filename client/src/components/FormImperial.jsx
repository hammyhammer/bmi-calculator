import React from 'react'

export default function FormImperial(props) {
  const { weightImperial, heightImperial } = props.input

  return (
    <div>
      <br />
      <form onSubmit={props.handleSubmit}>
        <input id="weightImperial" value={weightImperial} type="number" placeholder="pounds" onChange={props.handleImperialInput} />
        <label>weight</label>
        <br />
        <br />
        <input id="heightImperial" value={heightImperial} type="number" placeholder="inches" onChange={props.handleImperialInput} />
        <label>height</label>
        <br />
        <button>{props.type}</button>
      </form>
    </div>
  )
}
