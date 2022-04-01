import React from 'react';
import homecss from './Home.module.css'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1 className={homecss.header}>Welcome to Self-Check!</h1>
      <div className="horizontal"></div>
      <div>
        <p className={homecss.body}>
          At Self-Check, we offer free, and easy to do health assessments to gain a better understanding of
          one's health.
        </p>
      </div>
      <div>
        <p className={homecss.body}>These assessments are preventive tools to keep one mindful of their health.</p>
      </div>
      <div className="horizontal"></div>
      <div className={homecss.body}>
        <p>Select any test to get started!</p>
      </div>
      <div className={homecss.home_links}>
        <Link
          to="/bmi"
        >
          <button className={homecss.info_button}>Body Mass Index</button>
        </Link>

        <Link
          to="/heart-rate">
          <button className={homecss.info_button}>Heart Rate</button>
        </Link>

        <Link
          to="/skin-check">
          <button className={homecss.info_button}>Skin Check</button>
        </Link>
      </div>

    </div>
  );
};
