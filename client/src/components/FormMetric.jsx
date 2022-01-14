import React from 'react'

export default function Form(props) {
  const { weightMetric, heightMetric } = props.input

  return <form onSubmit={props.handleSubmit}>
    <br />
    <input className="met-weight" id="weightMetric" value={weightMetric} type="number" placeholder="kilograms" onChange={props.handleMetricInput} />
    <label className="icon-weight-met">
      <i className="fas fa-weight fa-3x"></i>
    </label>    <br />
    <br />
    <input className="met-height" id="heightMetric" value={heightMetric} type="number" placeholder="centimeters" onChange={props.handleMetricInput} />
    <label className="icon-height-met">
      <i className="fas fa-ruler-vertical fa-3x"></i>
    </label>
    <br />
    <br />
    <button className="met-submit-button">{props.type}</button>
  </form>

}
