import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MetricSystem from './components/MetricSystem';
import ResultsMetric from './components/ResultsMetric';
import ImperialSystem from './components/ImperialSystem';
import ResultsImperial from './components/ResultsImperial';
import WhyBmi from './components/WhyBmi';
import Home from './components/Home';
import BmiHome from './components/BmiHome';

import './App.css';

function App() {

  return (
    <div className="App">
      <nav><Navbar /></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BmiHome />} />
        <Route path="/imperial" element={<ImperialSystem />} />
        <Route path="/metric" element={<MetricSystem />} />
        <Route path="/metric-results/:id" element={<ResultsMetric />} />
        <Route path="/imperial-results/:id" element={<ResultsImperial />} />
        <Route path="/why-bmi" element={<WhyBmi />} />
      </Routes>

      <footer>
        <a href="https://github.com/hammyhammer">
          <img
            className="git"
            src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
            alt="Github Icon" />
        </a>
        <a href="https://www.linkedin.com/in/hampton-jacobs-a80821126/">
          <img
            className="link"
            src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
            alt="Linkedln Icon" />
        </a>
      </footer>
    </div>

  );
}

export default App;
