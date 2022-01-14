import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h2 className="home-header">Adult BMI Assessment</h2>
      <div className="home-main-body">
        <p>BMI (Body Mass Index) is a quick calculation in which we take your weight in kilograms and divide
          by your height squared (kg/m^2).</p>
        {/* <br /> */}
        <p>It is safe, and free assessment that could provide insight to any potential
          health-related issues.</p>
      </div>

      <div className="horizontal"></div>
      <div className="bottom">
        <p>If you are interested to see what your BMI is,
          please select the system of measurement you are most familiar with.</p>
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
  )
}
