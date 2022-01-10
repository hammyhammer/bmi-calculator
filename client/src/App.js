import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Adult BMI Calculator</div>} />
        <Route path="/imperial" element={<div>Imperial input page</div>} />
        <Route path="/metric" element={<div>Metric input page</div>} />
        <Route path="/results/:id" element={<div>Results Page</div>} />
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
