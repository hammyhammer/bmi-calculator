import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import MetricSystem from './MetricSystem/MetricSystem';
import ResultsMetric from './ResultsMetric/ResultsMetric';
import ImperialSystem from './components/ImperialSystem/ImperialSystem';
import ResultsImperial from './ResultsImperial/ResultsImperial';
import WhyBmi from './WhyBmi/WhyBmi';
import Home from './components/Home/Home';
import BmiHome from './components/BmiHome/BmiHome';
import HeartRate from './components/HeartRate/HeartRate';
import HeartRateInfo from './components/HeartRateInfo/HeartRateInfo';

import './App.css';
import ResultsHeartRate from './ResultsHeartRate/ResultsHeartRate';
import SkinCancer from './SkinCancer/SkinCancer';
import ResultsSkinCancer from './ResultsSkinCancer/ResultsSkinCancer';
import SkinCancerInfo from './SkinCancerInfo/SkinCancerInfo';
import Resources from './components/Resources/Resources';
import Results from './components/Results';

function App() {

  return (
    <div className="App">
      <nav><Navbar /></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BmiHome />} />
        <Route path="/imperial" element={<ImperialSystem />} />
        <Route path="/imperial-results/:id" element={<ResultsImperial />} />

        <Route path="/metric" element={<MetricSystem />} />
        <Route path="/metric-results/:id" element={<ResultsMetric />} />
        <Route path="/why-bmi" element={<WhyBmi />} />

        <Route path="/heart-rate" element={<HeartRate />} />
        <Route path="/heart-rate-results/:id" element={<ResultsHeartRate />} />
        <Route path="/heart-rate-info" element={<HeartRateInfo />} />

        <Route path="/skin-check" element={<SkinCancer />} />
        <Route path="/skin-check-results/:id" element={<ResultsSkinCancer />} />
        <Route path="/skin-check-info" element={<SkinCancerInfo />} />

        <Route path='/resources' element={<Resources />} />
        <Route path='/results' element={<Results />} />


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
