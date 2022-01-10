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
      <h2>BMI: {sum.fields?.calculation}%</h2>
      <h2>Category: {sum.fields?.category}</h2>
      <Link to={`/results/${id}`}></Link>
    </div>
  )
}
// Link is a new try
