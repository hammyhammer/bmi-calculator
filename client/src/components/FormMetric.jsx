import React from 'react'

export default function Form(props) {
  const { weightMetric, heightMetric } = props.input

  return <form onSubmit={props.handleSubmit}>
    <br />
    <input id="weightMetric" value={weightMetric} type="number" placeholder="kilograms" onChange={props.handleMetricInput} />
    <label>Kilograms</label>
    <br />
    <br />
    <input id="heightMetric" value={heightMetric} type="number" placeholder="centimeters" onChange={props.handleMetricInput} />
    <label>Centimeters</label>

    <br />
    <br />
    <button>{props.type}</button>
  </form>

}
