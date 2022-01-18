import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='bmi-home'>
      <h2 className="header">Adult BMI Assessment</h2>
      <div className="horizontal"></div>
      <div className="home-main-body">
        <p>BMI (Body Mass Index) is a measurement between the ratio of your height and weight.
          It is a good way to gauge your body's composition.
        </p>
        <p>With BMI, we can gain insight to potential health-related issues in a safe and quick manner.</p>
      </div>

      <div className="horizontal"></div>
      <div className="bottom">
        <p>Please select the system of measurement you are most familiar with.</p>
        <Link to="/imperial">
          <button className="imperial">Imperial</button>
        </Link>
        <p>(Inches, pounds.)</p>

        <br />
        <Link to="/metric">
          <button className="metric">Metric</button>
        </Link>
        <p>(Meters, kilograms.)</p>

      </div>
    </div>
  );
};
