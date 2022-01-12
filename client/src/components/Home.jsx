import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h2>Adult BMI Assessment</h2>
      <p style={{ padding: "10px 300px 0px 300px" }}>BMI (Body Mass Index) is a quick calculation in which we take your weight in kilograms and divide
        by your height squared (kg/m^2). It is safe, and free assessment that could provided insight to any potential
        health-related issues.</p>
      <div className="horizontal"></div>
      <p>If you are interested to see what your BMI is, please select the system of measurement you are most familiar with.</p>
      <Link to="/imperial">
        <button>Imperial</button>
      </Link>
      <Link to="/metric">
        <button>Metric</button>
      </Link>
    </div>
  )
}
