import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MetricSystem from './components/MetricSystem';
import ResultsPage from './components/ResultsPage';
import './App.css';

function App() {

  console.log(process.env.REACT_APP_AIRTABLE_BASE);
  console.log(process.env.REACT_APP_AIRTABLE_KEY);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Adult BMI Calculator</div>} />
        <Route path="/imperial" element={<div>Imperial input page</div>} />
        <Route path="/metric" element={<MetricSystem />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/why-bmi" element={<div>Why BMI Page</div>} />
      </Routes>
      {/* 
      <Link to="/imperial">
        <button>Imperial</button>
      </Link>
      <Link to="/metric">
        <button>Metric</button>
      </Link> */}
    </div>

  );
}

export default App;
