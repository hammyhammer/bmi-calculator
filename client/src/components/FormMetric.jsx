import React from 'react'

export default function Form(props) {
  const { weight, height } = props.input

  return <form>
    <input id="weight" value={weight} type="number" placeholder="Weight" />
    <br />
    <input id="height" value={height} type="number" placeholder="Height" />
  </form>

}
