import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from "../services/apiConfig"

export default function ResultsImperial() {
  const [sum, setSum] = useState({})
  const { id } = useParams

  useEffect(() => {
    const fetchSum = async () => {
      const res = await api.get(`/${id}`)
      setSum(res.data)
    }
    fetchSum();
  }, []);


  return (
    <div>
      THIS IS THE ***IMPERIAL** RESULTS PAGE
      <h3>BMI: {sum.fields?.calculationImperial}%</h3>
      <h4>Category: {sum.fields?.categoryImperial}</h4>
      <Link to={`/imperial-results/${id}`}></Link>
    </div>
  )
}
