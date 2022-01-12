import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MetricSystem from './components/MetricSystem';
import ResultsMetric from './components/ResultsMetric';
import ImperialSystem from './components/ImperialSystem';
import ResultsImperial from './components/ResultsImperial';
import WhyBmi from './components/WhyBmi';
import Home from './components/Home'

import './App.css';

function App() {

  return (
    <div className="App">
      <nav><Navbar /></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imperial" element={<ImperialSystem />} />
        <Route path="/metric" element={<MetricSystem />} />
        <Route path="/metric-results/:id" element={<ResultsMetric />} />
        <Route path="/imperial-results/:id" element={<ResultsImperial />} />
        <Route path="/why-bmi" element={<WhyBmi />} />
      </Routes>
    </div>

  );
}

export default App;
