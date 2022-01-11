import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from "../services/apiConfig"

export default function ResultsPage() {
  const [sum, setSum] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSum = async () => {
      const res = await api.get(`/${id}`) //`/${id}`
      setSum(res.data)
    }
    fetchSum();
  }, []);

  return (
    <div>
      THIS IS THE RESULTS PAGE
      <h3>BMI: {sum.fields?.calculationMetric}%</h3>
      <h4>Category: {sum.fields?.categoryMetric}</h4>
      <Link to={`/results/${id}`}></Link>
    </div>
  )
}
// Link is a new try
