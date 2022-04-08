import React from 'react';
import metricformcss from './FormMetric.module.css'

export default function Form(props) {
  const { weightMetric, heightMetric } = props.input;

  return <form onSubmit={props.handleSubmit}>
    <br />
    <input className={metricformcss.met_weight} id="weightMetric" value={weightMetric} type="number" placeholder="kilograms" onChange={props.handleMetricInput} />
    <label className={metricformcss.icon_weight}>
      <i className="fas fa-weight fa-3x"></i>
    </label>    <br />
    <br />
    <input className={metricformcss.met_height} id="heightMetric" value={heightMetric} type="number" placeholder="centimeters" onChange={props.handleMetricInput} />
    <label className={metricformcss.icon_height}>
      <i className="fas fa-ruler-vertical fa-3x"></i>
    </label>
    <br />
    <br />
    <button className={metricformcss.submit}>{props.type}</button>
  </form>
};
