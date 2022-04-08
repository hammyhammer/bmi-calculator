import React from 'react';
import skinformcss from './FormSkinCancer.module.css'

export default function FormSkinCancer(props) {
  const { newMole } = props.input;

  return <form onSubmit={props.handleSubmit}>
    <input className={skinformcss.input} id="newMole" checked={newMole} type="checkbox" placeholder="Please check if yes" onChange={props.handleCheckbox} />
    <br />
    <button className={skinformcss.submit}>{props.type}</button>
  </form>
};