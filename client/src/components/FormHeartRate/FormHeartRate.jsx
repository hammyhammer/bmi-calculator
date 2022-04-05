import React from 'react';
import formheartcss from './FormHeartRate.module.css';

export default function FormHeartRate(props) {
  const { recordedBeats } = props.input;

  return <form onSubmit={props.handleSubmit}>
    <br />
    <input className={formheartcss.input} id="recordedBeats" value={recordedBeats} type="number" placeholder="Heartbeats Counted" onChange={props.handleHeartInput} />
    <label className="icon-heart">
      <i class="fas fa-heartbeat fa-5x"></i>
    </label>
    <br />
    <button className={formheartcss.submit}>{props.type}</button>
  </form>
};
