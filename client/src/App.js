import { Link, Route, Routes, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import MetricSystem from './components/MetricSystem';
import ResultsMetric from './components/ResultsMetric';
import ImperialSystem from './components/ImperialSystem';
import ResultsImperial from './components/ResultsImperial';

import './App.css';

function App() {
  const { id } = useParams();

  // console.log(process.env.REACT_APP_AIRTABLE_BASE);
  // console.log(process.env.REACT_APP_AIRTABLE_KEY);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Adult BMI Calculator</div>} />
        <Route path="/imperial" element={<ImperialSystem />} />
        <Route path="/metric" element={<MetricSystem />} />
        <Route path="/metric-results/:id" element={<ResultsMetric />} />
        <Route path="/imperial-results/:id" element={<ResultsImperial />} />
        <Route path="/why-bmi" element={<div>Why BMI Page</div>} />
      </Routes>

      <Link to="/imperial">
        <button>Imperial</button>
      </Link>
      <Link to="/metric">
        <button>Metric</button>
      </Link>
    </div>

  );
}

export default App;
