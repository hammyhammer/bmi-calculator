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
      <h1>Your Results</h1>
      <h5>Your BMI is calculated to {Number.parseFloat(sum.fields?.calculationMetric).toFixed(2)}%. <br />
        With a BMI of {Number.parseFloat(sum.fields?.calculationMetric).toFixed(2)}%, you are placed in the {sum.fields?.categoryMetric} category.</h5>
      <Link to={`/metric-results/${id}`}></Link>
    </div>
  )
}
// Link is a new try
