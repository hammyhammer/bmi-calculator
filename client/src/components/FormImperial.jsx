import React from 'react'

export default function FormImperial() {
  const { weight, height } = props.input

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>weight</label>
        <input id="weight" value={weight} type="number" placeholder="inches" onChange={props.handleImperialInput} />
        <br />
        <input id="height" value={height} type="number" onChange={props.handleImperialInput} />
      </form>
    </div>
  )
}
