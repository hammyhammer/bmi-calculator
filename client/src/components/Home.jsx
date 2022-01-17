import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h1>Welcome to Self-Check</h1>
      <div className="horizontal"></div>
      <div>
        <p className="imp-body">
          At Self-Check, we offer free, and easy todo health assessments to gain a better understanding of
          one's health.
        </p>
      </div>
      <div>
        <p className="imp-body">These assessments are preventive measures to keep us mindful and help us become aware to illness that might pop up unexpectedly.</p>
      </div>
      <div className="horizontal"></div>
      <div className="imp-body">
        <p>Please select any test to get started!</p>
      </div>
      <div className="home-links">
        <Link
          to="/bmi"
        >
          <button className="info-button">Body Mass Index</button>
        </Link>

        <Link
          to="/heart-rate">
          <button className="info-button">Heart Rate</button>
        </Link>

        <Link
          to="/skin-check">
          <button className="info-button">Skin Check</button>
        </Link>
      </div>

    </div>
  )
}
