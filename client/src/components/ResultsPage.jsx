import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from "../services/apiConfig"

export default function ResultsPage() {
  const [sum, setSum] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSum = async () => {
      const res = await api.get(`/${id}`)
      setSum(res.data)
    }
    fetchSum();
  }, []);

  return (
    <div>
      <h2>{sum.fields?.weight}</h2>
      <h2>{sum.fields?.calculation}</h2>
      <h2>{sum.fields?.category}</h2>
    </div>
  )
}
