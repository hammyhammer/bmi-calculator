import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from "../services/apiConfig"

export default function ResultsPage() {
  const [sum, setSum] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSum = async () => {
      const res = await api.get(`/calculator/${id}`) //`/${id}`
      setSum(res.data)
    }
    fetchSum();
  }, []);

  return (
    <div>
      <div className="met-results-top">
        <h2>Your Results</h2>
        <h3>Your BMI is calculated to {Number.parseFloat(sum.fields?.calculationMetric).toFixed(2)}%.
          <br />
          With a BMI of {Number.parseFloat(sum.fields?.calculationMetric).toFixed(2)}%,
          you are placed in the {sum.fields?.categoryMetric} category.</h3>
      </div>
      <div className="results-metric">


        <div className="met-results-horizontal"></div>

        <div className="results-met-bottom">
          <p>BMI is used as a screening tool. BMI is not intended to diagnose any illnesses
            <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html">[1]</a>.</p>
          <p>{sum.fields?.riskCategory}</p>
        </div>
        <Link to={`/metric-results/${id}`}></Link>
      </div>
    </div>
  )
}
// Link is a new try
