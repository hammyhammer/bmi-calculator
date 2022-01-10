import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

export default function Form(props) {
  const { weight, height } = props.input

  return <form>
    <br />
    <input id="weight" value={weight} type="number" placeholder="kilograms" onChange={props.handleMetricInput} />
    <label>Kilograms</label>
    <br />
    <br />
    <input id="height" value={height} type="number" placeholder="centimeters" onChange={props.handleMetricInput} />
    <label>Centimeters</label>

    <br />
    <br />
    <button>{props.type}</button>
  </form>

}
